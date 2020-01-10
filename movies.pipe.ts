import {Pipe,PipeTransform, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'

@Pipe ({
    name: 'youtubesafeUrl'
})
export class YoutubePipe implements PipeTransform,OnInit{

    constructor(private domSanitizer: DomSanitizer){}

    transform(videoId: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(`
        <a class="vglink" href="https://www.youtube.com/embed/${videoId}" rel="nofollow">
        <span>https</span>
        <span>://</span>
        <span>www</span>
        <span>.</span>
        <span>youtube</span>
        <span>.</span>
        <span>com</span>
        <span>/</span>
        <span>embed</span>
        <span>/${videoId}</span>
        </a>
        `)
    }
         obser$:any;
    ngOnInit(){
        let finalurl="https://www.googleapis.com/youtube/v3/search?key=AIzaSyC7eSm-zMWZpT_zwzhlPyyjnCS9kFTJYwo&channelId=3&part=snippet,id&order=date&maxresults=10";
        console.log(finalurl)
        this.obser$.http.get(finalurl).subsribe; 
    }
}