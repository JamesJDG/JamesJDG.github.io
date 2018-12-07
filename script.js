function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1Pzy44IIM7C-1PCxcS01QocPV8a-9koBVcb4PlFeKuwA',
                   callback: function(data, tabletop) { 
                       console.log(data)
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)

