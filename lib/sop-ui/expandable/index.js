$('[sop-expandable-button]').on('click', function () {
  $(this).next('[sop-expandable]').toggleClass("sop-expandable--open");
  $(this).find('[sop-expandable-caret]').toggleClass('sop-caret--rotate');
});
