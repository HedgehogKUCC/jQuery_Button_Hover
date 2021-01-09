$(function() {
  var duration = 500;

  // 第一列
  $('#buttons1 button:nth-child(-n + 4)')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        backgroundColor: '#ae5e9b',
        color: '#fff'
      }, duration);
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        backgroundColor: '#fff',
        color: '#ebc000'
      }, duration);
    });

    // 第二列
    $('#buttons1 button:nth-child(n + 5):nth-child(-n + 8)')
    .on('mouseover', function() {
      $(this).stop(true).animate({
        borderWidth: '12px',
        color: '#ae5e9b'
      }, duration, 'easeOutSine');
    })
    .on('mouseout', function() {
      $(this).stop(true).animate({
        borderWidth: '0px',
        color: '#ebc000'
      }, duration, 'easeOutSine');
    });

    // 第三列
    $('#buttons1 button:nth-child(n + 9)')
    .on('mouseenter', function() {
      $(this).find('> span').stop(true).animate({
        width: '100%'
      }, duration, 'easeOutQuad');
    })
    .on('mouseleave', function() {
      $(this).find('> span').stop(true).animate({
        width: '0%'
      }, duration, 'easeOutQuad');
    });
});