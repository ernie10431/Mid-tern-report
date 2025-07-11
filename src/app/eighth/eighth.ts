import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-eighth',
  imports: [],
  templateUrl: './eighth.html',
  styleUrl: './eighth.scss'
})
export class Eighth {
  ngOnInit(): void {
    // 獲取 canvas 元素
    let ctx = document.getElementById('chart') as HTMLCanvasElement;

    // 設定數據
    let data = {
      // x 軸文字
      labels: ['餐費', '交通費', '租金'],
      datasets: [
        {
          // 上方分類文字
          label: '支出比',
          // 數據
          data: [12000, 3000, 9000],
          // 線與邊框顏色
          backgroundColor: [
            '#39C5BB',
            '#FF6699',
            '#333333',
          ],
          //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
          hoverOffset: 4,
        },
      ],
    };

    // 創建圖表
    let chart = new Chart(ctx, {
      //pie是圓餅圖,doughnut是環狀圖
      type: 'pie',
      data: data,
    });

  }

}
