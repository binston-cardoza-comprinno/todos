import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.scss']
})
export class TododetailComponent implements OnInit {
  ids: any

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }
  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.todoService.getId(id).subscribe(ids => {
      console.log(ids);
    });
 }

}

