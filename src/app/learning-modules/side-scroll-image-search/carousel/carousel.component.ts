import {
  QueryList,
  Component,
  OnInit,
  AfterViewInit,
  ContentChildren,
  ViewChildren,
  ElementRef,
  ViewChild,
  Input,
  Directive,
  Output,
  EventEmitter
} from '@angular/core';
import { CarouselItemDirective } from '../carousel-item.directive';
import {
  AnimationPlayer,
  AnimationBuilder,
  animate,
  style
} from '@angular/animations';

@Directive({
  selector: '[appCarouselItemElement]'
})
export class CarouselItemElementDirective {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<
    CarouselItemDirective
  >;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef })
  private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', { static: false }) private carousel: ElementRef;

  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  @Input() size: number;

  @Output() selectedAnswer: EventEmitter<number> = new EventEmitter();

  private player: AnimationPlayer;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private builder: AnimationBuilder) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.carousel.nativeElement.style.width =
        Math.round(this.items.length * 33.3333) + '%';
    }, 100);
  }

  selectClick() {
    this.selectedAnswer.emit(this.currentSlide);
  }

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }

    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * Math.round(this.size * 0.3333);

    this.playAnimation(offset);
  }

  prev() {
    if (this.currentSlide === 0) {
      return;
    }

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    const offset = this.currentSlide * Math.round(this.size * 0.3333);

    this.playAnimation(offset);
  }

  private playAnimation(offset: number) {
    const myAnimation = this.builder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))
    ]);

    const player = myAnimation.create(this.carousel.nativeElement);

    player.play();
  }
}
