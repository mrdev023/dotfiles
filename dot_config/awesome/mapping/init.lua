local modkey = 'Mod4'

local function bind(hotkeys_popup, mymainmenu, terminal)
  -- Media Control
  local globalkeys = require('mapping.global').bind(modkey, hotkeys_popup, mymainmenu, terminal)
  local globalkeys, clientbuttons, clientkeys = require('mapping.client').bind(globalkeys, modkey)
  require('mapping.mouse').bind()
  local globalkeys = require('mapping.tags').bind(globalkeys)

  root.keys(globalkeys)
    
  return clientkeys, clientbuttons
end

return {
  bind = bind
}