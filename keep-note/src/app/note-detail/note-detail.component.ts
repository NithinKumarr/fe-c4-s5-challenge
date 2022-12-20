import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/Note';
import { RouteService } from '../route.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  editStatus:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouteService) { }

  note: Note = {};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getFruit(+id).subscribe(data => {
        this.note = data;
      })
    });
  }
  deleteNote(){
    this.noteService.deleteNote(this.note?.id).subscribe(data => {
     this.routeService.toHome();
    })
  }

  editNote() {
    this.noteService.editFruit(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.editStatus=true;
      this.routeService.toHome();
    })
  }
  canDeactivate(){
    if (!this.editStatus)
        this.editStatus = confirm("You have not saved the edits, Are you sure you want to leave?");
    return this.editStatus;
  }

}
  

