$(document).ready(function () {
  var $rows = $('.table-box tbody tr');
  var $finCount = $('.table-box tbody tr.fin').length;
  var $totalLinks = $('.table-box tbody .btns a.pcBtn').length;
  var $totalPages = $totalLinks;

  var $percent = Math.round(($finCount / $totalPages) * 100);

  $('.count-total').text($totalPages);
  $('.count-fin').text($finCount);
  $('.count-percent').text($percent);

  $('.table-box tbody tr').each(function () {
    var $row = $(this);
    var $url = $row.find('span.url').text().trim();

    var $pcBtn = $row.find('.pcBtn');
    var $moBtn = $row.find('.moBtn');

    var $pcUrl = 'pb/' + $url;
    var $moUrl = 'javascript:PopWin("' + $pcUrl + '", "400", "740", "no");';

    $pcBtn.on('click', function () {
      $(this).attr('href', $pcUrl);
    });

    $moBtn.on('click', function () {
      $(this).attr('href', $moUrl);
    });
  });
});

// 팝업 함수
function PopWin(url, w, h, sb) {
  var setting = "width=" + w + ", height=" + h + ", top=50, left=50, scrollbars=" + sb;
  var newWin = window.open(url, "", setting);
  if (newWin) newWin.focus();
}