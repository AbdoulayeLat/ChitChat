// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"basechat.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

window.onload = function () {
  var firebaseConfig = {
    apiKey: "AIzaSyAK9o-m9i97W--01XikQipHNUV4EQfdIM8",
    authDomain: "chit-cae27.firebaseapp.com",
    databaseURL: "https://chit-cae27-default-rtdb.firebaseio.com",
    projectId: "chit-cae27",
    storageBucket: "chit-cae27.appspot.com",
    messagingSenderId: "749327233673",
    appId: "1:749327233673:web:f182f17c238213d4320c58",
    measurementId: "G-WT8ML4X9HT"
  }; // Initialize Firebase

  firebase.initializeApp(firebaseConfig); // This is very IMPORTANT!! We're going to use "db" a lot.

  var db = firebase.database(); // We're going to use oBjEcT OrIeNtEd PrOgRaMmInG. Lol

  var MEME_CHAT = /*#__PURE__*/function () {
    function MEME_CHAT() {
      _classCallCheck(this, MEME_CHAT);
    }

    _createClass(MEME_CHAT, [{
      key: "home",
      value: // Home() is used to create the home page
      function home() {
        // First clear the body before adding in
        // a title and the join form
        document.body.innerHTML = '';
        this.create_title();
        this.create_join_form();
      } // chat() is used to create the chat page

    }, {
      key: "chat",
      value: function chat() {
        this.create_title();
        this.create_chat();
      } // create_title() is used to create the title

    }, {
      key: "create_title",
      value: function create_title() {
        var title_container = document.createElement('div');
        title_container.setAttribute('id', 'title_container');
        var title_inner_container = document.createElement('div');
        title_inner_container.setAttribute('id', 'title_inner_container');
        var title = document.createElement('h1');
        title.setAttribute('id', 'title');
        title.textContent = 'ChitChat';
        title_inner_container.append(title);
        title_container.append(title_inner_container);
        document.body.append(title_container);
      } // create_join_form() creates the join form

    }, {
      key: "create_join_form",
      value: function create_join_form() {
        var parent = this;
        var join_container = document.createElement('div');
        join_container.setAttribute('id', 'join_container');
        var join_inner_container = document.createElement('div');
        join_inner_container.setAttribute('id', 'join_inner_container');
        var join_button_container = document.createElement('div');
        join_button_container.setAttribute('id', 'join_button_container');
        var join_button = document.createElement('button');
        join_button.setAttribute('id', 'join_button');
        join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>';
        var join_input_container = document.createElement('div');
        join_input_container.setAttribute('id', 'join_input_container');
        var join_input = document.createElement('input');
        join_input.setAttribute('id', 'join_input');
        join_input.setAttribute('maxlength', 15);
        join_input.placeholder = 'No.... It\'s Patrick Star'; // Every time we type into the join_input

        join_input.onkeyup = function () {
          // If the input we have is longer that 0 letters
          if (join_input.value.length > 0) {
            // Make the button light up
            join_button.classList.add('enabled'); // Allow the user to click the button

            join_button.onclick = function () {
              // Save the name to local storage. Passing in
              // the join_input.value
              parent.save_name(join_input.value); // Remove the join_container. So the site doesn't look weird.

              join_container.remove(); // parent = this. But it is not the join_button
              // It is (MEME_CHAT = this).

              parent.create_chat();
            };
          } else {
            // If the join_input is empty then turn off the
            // join button
            join_button.classList.remove('enabled');
          }
        }; // Append everything to the body


        join_button_container.append(join_button);
        join_input_container.append(join_input);
        join_inner_container.append(join_input_container, join_button_container);
        join_container.append(join_inner_container);
        document.body.append(join_container);
      } // create_load() creates a loading circle that is used in the chat container

    }, {
      key: "create_load",
      value: function create_load(container_id) {
        var parent = this; // This is a loading function. Something cool to have.

        var container = document.getElementById(container_id);
        container.innerHTML = '';
        var loader_container = document.createElement('div');
        loader_container.setAttribute('class', 'loader_container');
        var loader = document.createElement('div');
        loader.setAttribute('class', 'loader');
        loader_container.append(loader);
        container.append(loader_container);
      } // create_chat() creates the chat container and stuff

    }, {
      key: "create_chat",
      value: function create_chat() {
        var parent = this;
        var title_container = document.getElementById('title_container');
        var title = document.getElementById('title');
        title_container.classList.add('chat_title_container'); // Make the title smaller by making it 'chat_title'

        title.classList.add('chat_title');
        var chat_container = document.createElement('div');
        chat_container.setAttribute('id', 'chat_container');
        var chat_inner_container = document.createElement('div');
        chat_inner_container.setAttribute('id', 'chat_inner_container');
        var chat_content_container = document.createElement('div');
        chat_content_container.setAttribute('id', 'chat_content_container');
        var chat_input_container = document.createElement('div');
        chat_input_container.setAttribute('id', 'chat_input_container');
        var chat_input_send = document.createElement('button');
        chat_input_send.setAttribute('id', 'chat_input_send');
        chat_input_send.setAttribute('disabled', true);
        chat_input_send.innerHTML = "<i class=\"far fa-paper-plane\"></i>";
        var chat_input = document.createElement('input');
        chat_input.setAttribute('id', 'chat_input'); // Only a max message length of 1000

        chat_input.setAttribute('maxlength', 1000); // Get the name of the user

        chat_input.placeholder = "".concat(parent.get_name(), ". Say something...");

        chat_input.onkeyup = function () {
          if (chat_input.value.length > 0) {
            chat_input_send.removeAttribute('disabled');
            chat_input_send.classList.add('enabled');

            chat_input_send.onclick = function () {
              chat_input_send.setAttribute('disabled', true);
              chat_input_send.classList.remove('enabled');

              if (chat_input.value.length <= 0) {
                return;
              } // Enable the loading circle in the 'chat_content_container'


              parent.create_load('chat_content_container'); // Send the message. Pass in the chat_input.value

              parent.send_message(chat_input.value); // Clear the chat input box

              chat_input.value = ''; // Focus on the input just after

              chat_input.focus();
            };
          } else {
            chat_input_send.classList.remove('enabled');
          }
        };

        var chat_logout_container = document.createElement('div');
        chat_logout_container.setAttribute('id', 'chat_logout_container');
        var chat_logout = document.createElement('button');
        chat_logout.setAttribute('id', 'chat_logout');
        chat_logout.textContent = "".concat(parent.get_name(), " \u2022 logout"); // "Logout" is really just deleting the name from the localStorage

        chat_logout.onclick = function () {
          localStorage.clear(); // Go back to home page

          parent.home();
        };

        chat_logout_container.append(chat_logout);
        chat_input_container.append(chat_input, chat_input_send);
        chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container);
        chat_container.append(chat_inner_container);
        document.body.append(chat_container); // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'

        parent.create_load('chat_content_container'); // then we "refresh" and get the chat data from Firebase

        parent.refresh_chat();
      } // Save name. It literally saves the name to localStorage

    }, {
      key: "save_name",
      value: function save_name(name) {
        // Save name to localStorage
        localStorage.setItem('name', name);
      } // Sends message/saves the message to firebase database

    }, {
      key: "send_message",
      value: function send_message(message) {
        var parent = this; // if the local storage name is null and there is no message
        // then return/don't send the message. The user is somehow hacking
        // to send messages. Or they just deleted the
        // localstorage themselves. But hacking sounds cooler!!

        if (parent.get_name() == null && message == null) {
          return;
        } // Get the firebase database value


        db.ref('chats/').once('value', function (message_object) {
          // This index is mortant. It will help organize the chat in order
          var index = parseFloat(message_object.numChildren()) + 1;
          db.ref('chats/' + "message_".concat(index)).set({
            name: parent.get_name(),
            message: message,
            index: index
          }).then(function () {
            // After we send the chat refresh to get the new messages
            parent.refresh_chat();
          });
        });
      } // Get name. Gets the username from localStorage

    }, {
      key: "get_name",
      value: function get_name() {
        // Get the name from localstorage
        if (localStorage.getItem('name') != null) {
          return localStorage.getItem('name');
        } else {
          this.home();
          return null;
        }
      } // Refresh chat gets the message/chat data from firebase

    }, {
      key: "refresh_chat",
      value: function refresh_chat() {
        var chat_content_container = document.getElementById('chat_content_container'); // Get the chats from firebase

        db.ref('chats/').on('value', function (messages_object) {
          // When we get the data clear chat_content_container
          chat_content_container.innerHTML = ''; // if there are no messages in the chat. Retrun . Don't load anything

          if (messages_object.numChildren() == 0) {
            return;
          } // OK! SO IF YOU'RE A ROOKIE CODER. THIS IS GOING TO BE
          // SUPER EASY-ISH! I THINK. MAYBE NOT. WE'LL SEE!
          // convert the message object values to an array.


          var messages = Object.values(messages_object.val());
          var guide = []; // this will be our guide to organizing the messages

          var unordered = []; // unordered messages

          var ordered = []; // we're going to order these messages

          for (var i, i = 0; i < messages.length; i++) {
            // The guide is simply an array from 0 to the messages.length
            guide.push(i + 1); // unordered is the [message, index_of_the_message]

            unordered.push([messages[i], messages[i].index]);
          } // Sort the unordered messages by the guide


          guide.forEach(function (key) {
            var found = false;
            unordered = unordered.filter(function (item) {
              if (!found && item[1] == key) {
                // Now push the ordered messages to ordered array
                ordered.push(item[0]);
                found = true;
                return false;
              } else {
                return true;
              }
            });
          }); // Now we're done. Simply display the ordered messages

          ordered.forEach(function (data) {
            var name = data.name;
            var message = data.message;
            var message_container = document.createElement('div');
            message_container.setAttribute('class', 'message_container');
            var message_inner_container = document.createElement('div');
            message_inner_container.setAttribute('class', 'message_inner_container');
            var message_user_container = document.createElement('div');
            message_user_container.setAttribute('class', 'message_user_container');
            var message_user = document.createElement('p');
            message_user.setAttribute('class', 'message_user');
            message_user.textContent = "".concat(name);
            var message_content_container = document.createElement('div');
            message_content_container.setAttribute('class', 'message_content_container');
            var message_content = document.createElement('p');
            message_content.setAttribute('class', 'message_content');
            message_content.textContent = "".concat(message);
            message_user_container.append(message_user);
            message_content_container.append(message_content);
            message_inner_container.append(message_user_container, message_content_container);
            message_container.append(message_inner_container);
            chat_content_container.append(message_container);
          }); // Go to the recent message at the bottom of the container

          chat_content_container.scrollTop = chat_content_container.scrollHeight;
        });
      }
    }]);

    return MEME_CHAT;
  }(); // So we've "built" our app. Let's make it work!!


  var app = new MEME_CHAT(); // If we have a name stored in localStorage.
  // Then use that name. Otherwise , if not.
  // Go to home.

  if (app.get_name() != null) {
    app.chat();
  }
};
},{}],"../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49856" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","basechat.js"], null)
//# sourceMappingURL=/basechat.2e8792bf.js.map