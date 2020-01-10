import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        
        li{
            display: inline;
            padding-left: 15px;
          
        }
        ul{
            position: relative;
            top: 5px
        }
        input{float: right; padding-bottom: 2px}
        nav{ border-bottom: solid 2px blue}

    `]
})

export class NavbarComponent{
    
}