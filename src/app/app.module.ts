import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { DraggableModule } from './ng2-draggable';

import { AppComponent } from './app.component';
import { PopupPreviewComponent } from './popup-preview/popup-preview.component';
import { ComGrandparentComponent } from './com-grandparent/com-grandparent.component';
import { ComParentComponent } from './com-parent/com-parent.component';
import { ComChildComponent } from './com-child/com-child.component';

import { MyhighlighterDirective } from './shared/directives/myhighlighter.directive';
import { ColorDirective } from './shared/directives/color.directive';
import { RedDirective } from './shared/directives/red.directive.js';

import { DraggableDirective } from './shared/directives/draggable.directive';
import { PreviewableDirective } from './shared/directives/previewable.directive';
import { ResizableDirective } from './shared/directives/resizable.directive';


import { ProfileService } from './shared/services/profile.service';



// import { Sorter } from './shared/utils/sorter';

// import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
// import { TrimPipe } from './shared/pipes/trim.pipe';


@NgModule({
  imports: [BrowserModule], // DraggableModule
  declarations: [
    AppComponent,
    PopupPreviewComponent,
    ComGrandparentComponent,
    ComParentComponent,
    ComChildComponent,

    MyhighlighterDirective,
    ColorDirective,
    RedDirective,

    DraggableDirective,
    PreviewableDirective,
    ResizableDirective,
    // Sorter,
    // CapitalizePipe,
    // TrimPipe
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
