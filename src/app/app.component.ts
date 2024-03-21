import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { WorkerService } from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ServiceTest';

  public content: any = {};

  constructor(private http:HttpClient,private serviceWorker:WorkerService){

  }
  ngOnInit(){
    this.serviceWorker.initialize();
    this.http.get("http://localhost:3000/DefaultService").subscribe(Response => {   this.content = Response});

  }

  RefreshObject(obj: string){
    this.content = JSON.parse(obj);
  }
  
}
