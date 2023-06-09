import { Component } from '@angular/core';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemSearchResultListElementComponent } from '../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';

@listableObjectComponent('EratSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-era-search-result-list-element',
  styleUrls: ['./era-search-result-list-element.component.scss'],
  templateUrl: './era-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Organisation Unit
 */
export class EraSearchResultListElementComponent extends ItemSearchResultListElementComponent {

  /**
   * Display thumbnail if required by configuration
   */
  showThumbnails: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
  }

}
