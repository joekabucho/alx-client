<template>
  <div>
    <canvas id="bar-chart" height="159px" width="523px"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import barChartData from '../api/mock/bar-data'

export default {
  name: 'BarChart',
  data() {
    return {
      barChartData: barChartData
    }
  },
  mounted() {
    Chart.elements.Rectangle.prototype.draw = function() {
      let ctx = this._chart.ctx;
      let vm = this._view;
      let left, right, top, bottom, signX, signY, borderSkipped, radius;
      var borderWidth = vm.borderWidth;
      var cornerRadius = 20;

      if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }

      if (borderWidth) {
        let barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        let halfStroke = borderWidth / 2;
        let borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        let borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        let borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        let borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;
      let corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ];

      let borders = ['bottom', 'left', 'top', 'right'];
      let startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      let corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i);
        let   nextCornerId = i+1;
        if(nextCornerId == 4){
          nextCornerId = 0
        }

       let nextCorner = cornerAt(nextCornerId);

      let  width = corners[2][0] - corners[1][0];
       let height = corners[0][1] - corners[1][1];
      let  x = corners[1][0];
       let y = corners[1][1];

        let radius = cornerRadius;

        if(radius > height/2){
          radius = height/2;
        }if(radius > width/2){
          radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    };
    const ctx = document.getElementById('bar-chart');
    new Chart(ctx, this.barChartData);
  }
}
</script>
