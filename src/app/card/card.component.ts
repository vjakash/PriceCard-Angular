import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  faTimes=faTimes;
  faCheck=faCheck;
  @Input('common') common;
  @Input('item') item;
  constructor() {}

  ngOnInit(): void {}
  free(listItem, i) {
    if (listItem.tier == 'free' && i > 3) {
      return true;
    } else {
      return false;
    }
  }
  plus(listItem, i) {
    if (listItem.tier == 'Plus' && i == listItem.list.length - 1) {
      return true;
    } else {
      return false;
    }
  }
  textMuted(item, i) {
    if (
      (item.tier == 'free' && i > 3) ||
      (item.tier == 'Plus' && i == item.list.length - 1)
    ) {
      console.log(item,i);
      return "text-muted";
    }
  }
}
