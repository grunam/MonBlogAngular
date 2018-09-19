import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'Mon blog';
  
  //posts = "coucou"; 
  
  /*
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
Nulla sed sollicitudin dolor, ut bibendum augue. Fusce vel facilisis diam. \n\
Suspendisse potenti. Vivamus porta vitae mauris in feugiat. \n\
Donec a facilisis lectus. Maecenas felis lectus, pellentesque quis nunc ut, hendrerit pellentesque dui.',
      loveIts: 1,
      created_at: new Date(2017, 10, 24, 11)
    }
  ];
*/
  
 
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
Nulla sed sollicitudin dolor, ut bibendum augue. Fusce vel facilisis diam. \n\
Suspendisse potenti. Vivamus porta vitae mauris in feugiat. \n\
Donec a facilisis lectus. Maecenas felis lectus, pellentesque quis nunc ut, hendrerit pellentesque dui.',
      loveIts: 1,
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      title: 'Mon deuxième post',
      content: 'Duis id ante dapibus, maximus arcu at, tristique ex. \n\
Mauris laoreet libero a tincidunt semper. Integer sit amet ultrices felis, condimentum porta lorem. \n\
Donec sollicitudin vel velit eu scelerisque. \n\
In blandit porttitor mauris, ut dictum risus elementum et. Curabitur quis bibendum nulla.',
      loveIts: 0,
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      title: 'Encore un post',
      content: 'Sed eu turpis nisi. Sed sollicitudin finibus purus, at ornare nunc lacinia vel. \n\
Suspendisse volutpat tempor ex a commodo. \n\
Etiam aliquet varius diam, ut accumsan elit accumsan sit amet. \n\
Pellentesque et ullamcorper turpis. Fusce vitae felis nisi. Vivamus sed ipsum lectus. \n\
Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_at: new Date(2017, 10, 24, 11)
    }
  ];

}
