import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/app-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .getAll<any[]>('news')
      .subscribe((data: any[]) => this.newsList = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
          console.log(JSON.stringify(this.newsList));
        });
  }
/*
  constructor(doc:HTMLDocument){
    doc.onload = function()
  {
    var timestamp = 0;
    var loading = false;
    var lastScrollTop = 0;

    doc.onscroll = function()
    {
      var scrollTop = $(this).scrollTop();

      if (scrollTop < lastScrollTop || ! 0) {
        return;
      }
      lastScrollTop = scrollTop;

      var scrollBottom = scrollTop + $(window).height();

      var $lastItem = $('.page .item').last();
      if ($lastItem.length > 0) {
        var lastItemBottom = $lastItem.offset().top + $lastItem.height();

        if (scrollBottom > lastItemBottom) {
          timestamp = parseInt($lastItem.attr('data-timestamp')) - 1;

          if (! loading) {
            loading = true;
            $('.page .loading').removeClass('hidden');

            $.get(contentify.baseUrl + 'news/showStream/' + timestamp, function(data)
            {
              var $items = $(data).addClass('new');
              $('.page .items').append($items).append('<div class="bugfix"></div>');
              $('.page .items .bugfix').last().hide().show(0); // Force browsers to show CSS transitions
              $items.removeClass('new');
            }).always(function()
            {
              if ($('.page .items .item').last().attr('data-more') == 1) {
                loading = false;
              }
              $('.page .loading').addClass('hidden');
            });
          }
        }
      }

    });
  });
  */
}
