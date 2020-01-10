import {Component} from '@angular/core'
import { MovieService } from './movies.service';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',

})
export class MovieComponent{
    videos:any[];
    constructor(private movieService: MovieService){}
    ngOnInit(){
       this.videos=[];
       this.movieService.getVideosForChanel('UCzeql9iLwjDgaww1R8dluA',15)
       //.pipe(takeUntil(this.unsubscribe$))
       .subscribe(lista => {
           for(let element of lista["items"]){
               this.videos.push(element)
           }
       })
    }
}