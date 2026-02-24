(function () {
  var input = document.getElementById('avatar-input');
  var avatarImg = document.getElementById('profile-avatar');
  var btnEdit = document.getElementById('btn-avatar-edit');
  var btnUpdate = document.getElementById('btn-avatar-update');
  var btnMessage = document.getElementById('btn-message');
  var btnFavorite = document.getElementById('btn-favorite');
  var btnEditProfile = document.getElementById('btn-edit-profile');
  var objectUrl = null;

  function revokeObjectUrl() {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      objectUrl = null;
    }
  }

  function handleFileChange(e) {
    var file = e.target.files && e.target.files[0];
    if (!file || file.type.indexOf('image/') !== 0) return;
    revokeObjectUrl();
    objectUrl = URL.createObjectURL(file);
    if (avatarImg) avatarImg.src = objectUrl;
    e.target.value = '';
  }

  function openFileInput() {
    if (input) input.click();
  }

  if (input) input.addEventListener('change', handleFileChange);
  if (btnEdit) btnEdit.addEventListener('click', openFileInput);
  if (btnUpdate) btnUpdate.addEventListener('click', openFileInput);
  if (btnMessage) btnMessage.addEventListener('click', function () { console.log('Написать сообщение'); });
  if (btnFavorite) btnFavorite.addEventListener('click', function () { console.log('Добавить в избранное'); });
  if (btnEditProfile) btnEditProfile.addEventListener('click', function () { console.log('Редактировать профиль'); });
})();
