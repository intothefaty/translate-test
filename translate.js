function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages:'hi'
    }, 'google_translate_element');
    setTimeout(function(){
      var select = document.querySelector('select.goog-te-combo');
      select.value    = "hi"; 
      select.dispatchEvent(new Event('change'));
    },1000)
  }