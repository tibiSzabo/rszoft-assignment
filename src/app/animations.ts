import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':leave', [
      stagger(300, [
        animate('2s', style({opacity: 0}))
      ])
    ], {optional: true}),
    query(':enter', [
      style({opacity: 0}),
      stagger(300, [
        animate('2s', style({opacity: 1}))
      ])
    ], {optional: true})
  ])
]);
