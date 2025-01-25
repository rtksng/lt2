import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule here

// Other imports

@NgModule({
  // ...
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule // Add FormsModule to imports
    // Other modules
  ],
  // ...
})
export class AppModule {}