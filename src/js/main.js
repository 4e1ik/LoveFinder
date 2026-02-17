(function () {
  var DEFAULT_AVATAR = 'https://i.imgur.com/LwofhRt.jpeg';
  var input = document.getElementById('avatar-input');
  var avatarImg = document.getElementById('profile-avatar');
  var btnEdit = document.getElementById('btn-avatar-edit');
  var btnUpdate = document.getElementById('btn-avatar-update');
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
    avatarImg.src = objectUrl;
    e.target.value = '';
  }

  function openFileInput() {
    if (input) input.click();
  }

  if (input) input.addEventListener('change', handleFileChange);
  if (btnEdit) btnEdit.addEventListener('click', openFileInput);
  if (btnUpdate) btnUpdate.addEventListener('click', openFileInput);
})();
