(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,n){},52:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return g});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(0),c=n.n(i),l=n(12),m=n(10),d=n(1),u=n(53),h=n.n(u),M=n(54),f=n(55),b=n(56),E=n(57),k=n(58),O=n(59),v=n(60);n(127);e.ACCESS_TOKEN="pk.eyJ1IjoibHVjYXN3b2oiLCJhIjoiY2l5Nmg4cWU1MDA0ejMzcDJtNHJmZzJkcyJ9.WhcEdTYQH6sSw2pm0RSP9Q";var g=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).state={coordinates:{lat:48.872198,lng:2.3366308}},a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"componentDidMount",value:function(){var a=this;h()({container:document.querySelector("#address-input")}).on("change",function(e){return a.setState({coordinates:e.suggestion.latlng})}),d.Diagnose.fullDiagnostic().then(function(a){e.console.debug(a)})}},{key:"render",value:function(){var e=this.state.coordinates;return c.a.createElement("div",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"react-mapbox-wrapper"),c.a.createElement("a",{href:"https://github.com/MeilleursAgents/react-mapbox-wrapper",target:"_blank",rel:"noreferrer noopener"},c.a.createElement("img",{style:{position:"absolute",top:0,right:0,border:0},src:"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png",alt:"Fork me on GitHub"}))),c.a.createElement("br",null),c.a.createElement("a",{className:"link",href:"https://github.com/MeilleursAgents/react-mapbox-wrapper#usage",target:"_blank",rel:"noreferrer noopener"},"Documentation"),c.a.createElement("a",{className:"link margin-left",href:"https://github.com/MeilleursAgents/react-mapbox-wrapper/tree/master/examples/src",target:"_blank",rel:"noreferrer noopener"},"Examples sources"),c.a.createElement("div",{className:"ap-input-wrapper"},c.a.createElement("input",{type:"search",id:"address-input",placeholder:"Search a place"}),c.a.createElement("span",{className:"disclaimer"},"We use algolia's default api key, places may have imprecise coordinates")),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"SimpleMap with fixed size"),c.a.createElement("div",{className:"example"},c.a.createElement(M.a,{className:"map-container",coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React from 'react';\nimport MapboxMap from 'react-mapbox-wrapper';\n\nexport default function SimpleMap({coordinates}) {\n  return (\n    <div style={{ height: 400, width: 400 }}>\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={coordinates}\n      />\n    </div>\n  );\n}\n\nSimpleMap.displayName = 'SimpleMap';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Marker"),c.a.createElement("div",{className:"example"},c.a.createElement(f.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Marker } from 'react-mapbox-wrapper';\n\nexport default class MapWithMarker extends Component {\n  constructor(props) {\n    super(props);\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  onMapLoad(map) {\n    this.map = map;\n    this.forceUpdate();\n  }\n\n  render() {\n    let marker;\n    const { coordinates } = this.props;\n\n    if (this.map) {\n      marker = <Marker coordinates={coordinates} map={this.map} />;\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={coordinates}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n      >\n        {marker}\n      </MapboxMap>\n    );\n  }\n}\n\nMapWithMarker.displayName = 'MapWithMarker';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Moving Marker with array-style LngLat"),c.a.createElement("div",{className:"example"},c.a.createElement(b.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Marker } from 'react-mapbox-wrapper';\n\nexport default class MapWithMovingMarker extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      coordinates: props.coordinates,\n    };\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  componentDidMount() {\n    setInterval(() => {\n      const { lat, lng } = this.props.coordinates;\n\n      this.setState({\n        coordinates: [lng + 0.001 * Math.random(), lat + 0.001 * Math.random()],\n      });\n    }, 1000);\n  }\n\n  onMapLoad(map) {\n    this.map = map;\n    this.forceUpdate();\n  }\n\n  render() {\n    let marker;\n    const { coordinates } = this.props;\n\n    if (this.map) {\n      marker = <Marker coordinates={this.state.coordinates} map={this.map} />;\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={coordinates}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n      >\n        {marker}\n      </MapboxMap>\n    );\n  }\n}\n\nMapWithMovingMarker.displayName = 'MapWithMovingMarker';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Marker with Popup on Click"),c.a.createElement("div",{className:"example"},c.a.createElement(E.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Marker } from 'react-mapbox-wrapper';\n\nexport default class MarkerWithPopup extends Component {\n  constructor(props) {\n    super(props);\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  onMapLoad(map) {\n    this.map = map;\n    this.forceUpdate();\n  }\n\n  render() {\n    let marker;\n    const { coordinates } = this.props;\n\n    if (this.map) {\n      const popup = <div>Meaningful content on my Marker</div>;\n\n      marker = (\n        <Marker\n          coordinates={coordinates}\n          map={this.map}\n          popup={popup}\n          popupAnchor='bottom'\n          popupOffset={30}\n        />\n      );\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={coordinates}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n      >\n        {marker}\n      </MapboxMap>\n    );\n  }\n}\n\nMarkerWithPopup.displayName = 'MarkerWithPopup';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Custom Marker with Popup on Over"),c.a.createElement("div",{className:"example"},c.a.createElement(k.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Marker } from 'react-mapbox-wrapper';\n\nexport default class CustomMarker extends Component {\n  constructor(props) {\n    super(props);\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  onMapLoad(map) {\n    this.map = map;\n    this.forceUpdate();\n  }\n\n  render() {\n    let marker;\n    const { coordinates } = this.props;\n\n    if (this.map) {\n      const popup = <div>http://localhost</div>;\n\n      marker = (\n        <Marker\n          coordinates={coordinates}\n          map={this.map}\n          popup={popup}\n          popupAnchor='bottom'\n          popupOnOver\n          popupOffset={20}\n        >\n          <span role=\"img\" aria-label=\"Emoji Marker\" style={{ fontSize: '30px' }}>\n            \ud83c\udfe2\n          </span>\n        </Marker>\n      );\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={coordinates}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n      >\n        {marker}\n      </MapboxMap>\n    );\n  }\n}\n\nCustomMarker.displayName = 'CustomMarker';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Circle"),c.a.createElement("div",{className:"example"},c.a.createElement(O.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Circle } from 'react-mapbox-wrapper';\n\nexport default class MapWithCircle extends Component {\n  constructor(props) {\n    super(props);\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  onMapLoad(map) {\n    this.map = map;\n    this.forceUpdate();\n  }\n\n  render() {\n    let circle;\n    const { coordinates } = this.props;\n\n    if(this.map) {\n        circle = <Circle\n        key=\"radius\"\n        id=\"radius\"\n        coordinates={{lat: 40.7590403, lng: -74.0392709}}\n        map={this.map}\n        radius={330}\n        unit=\"feet\"\n        paint={{\n          'fill-color': '#0074e4',\n          'fill-opacity': 0.33,\n        }}\n      />\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={{lat: 40.7590403, lng: -74.0392709}}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n      >\n        {circle}\n      </MapboxMap>\n    );\n  }\n}\n\nMapWithCircle.displayName = 'MapWithCircle';"))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Radius, Marker, Popup and fitBounds"),c.a.createElement("div",{className:"example"},c.a.createElement(v.a,{coordinates:e}),c.a.createElement(l.a,{className:"code",language:"jsx",style:m.a},"import React, { Component } from 'react';\nimport MapboxMap, { Marker, Circle, Helpers } from 'react-mapbox-wrapper';\n\nconst SENTIER_COORDINATES = { lat: 48.868526, lng: 2.3434886 };\nconst RADIUS_COORDINATES = { lat: 48.870362, lng: 2.3400597 };\n\nexport default class AllInOne extends Component {\n  constructor(props) {\n    super(props);\n\n    this.onMapLoad = this.onMapLoad.bind(this);\n  }\n\n  onMapLoad(map, coordinates) {\n    this.map = map;\n    this.forceUpdate();\n\n    const bounds = Helpers.newBounds();\n    bounds.extend(Helpers.newBound({lat: 48.872198, lng: 2.3366308}));\n    bounds.extend(Helpers.newBound(SENTIER_COORDINATES));\n\n    this.map.jumpTo(this.map.cameraForBounds(bounds, { padding: 120 }));\n  }\n\n  render() {\n    let markers;\n    if (this.map) {\n      const popupHaussmann = <div>Happy to be here</div>;\n      const popupSentier = <div>Old home</div>;\n\n      markers = [\n        <Marker\n          key=\"haussmann\"\n          coordinates={{lat: 48.872198, lng: 2.3366308}}\n          map={this.map}\n          popup={popupHaussmann}\n          popupAnchor='top-left'\n          popupOnOver\n          popupOffset={20}\n        >\n          <span role=\"img\" aria-label=\"Emoji Marker\" style={{ fontSize: '30px' }}>\n            \ud83c\udfe2\n          </span>\n        </Marker>,\n        <Marker\n          key=\"sentier\"\n          coordinates={SENTIER_COORDINATES}\n          map={this.map}\n          popup={popupSentier}\n          popupAnchor='bottom-right'\n          popupOnOver\n          popupOffset={20}\n        >\n          <span role=\"img\" aria-label=\"Emoji Marker\" style={{ fontSize: '30px' }}>\n            \ud83c\udfe0\n          </span>\n        </Marker>,\n        <Circle\n          key=\"radius\"\n          id=\"radius\"\n          coordinates={RADIUS_COORDINATES}\n          map={this.map}\n          radius={500}\n          unit=\"meters\"\n          paint={{\n            'fill-color': '#0074e4',\n            'fill-opacity': 0.33,\n          }}\n        />,\n      ];\n    }\n\n    return (\n      <MapboxMap\n        accessToken={global.ACCESS_TOKEN}\n        coordinates={{lat: 48.872198, lng: 2.3366308}}\n        className=\"map-container\"\n        onLoad={this.onMapLoad}\n        withCompass\n        withZoom\n        withFullscreen\n      >\n        {markers}\n      </MapboxMap>\n    );\n  }\n}\n\nAllInOne.displayName = 'AllInOne';"))),c.a.createElement("footer",{className:"footer"},"Made with"," ",c.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","by"," ",c.a.createElement("a",{href:"https://www.meilleursagents.com",target:"_blank",rel:"noreferrer noopener"},"MeilleursAgents")))}}]),n}(i.Component)}).call(this,n(3))},54:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return p});var t=n(0),o=n.n(t),r=n(1),s=n.n(r);function p(a){var n=a.coordinates;return o.a.createElement("div",{style:{height:400,width:400}},o.a.createElement(s.a,{accessToken:e.ACCESS_TOKEN,coordinates:n}))}p.displayName="SimpleMap"}).call(this,n(3))},55:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return u});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"onMapLoad",value:function(e){this.map=e,this.forceUpdate()}},{key:"render",value:function(){var a,n=this.props.coordinates;return this.map&&(a=l.a.createElement(m.Marker,{coordinates:n,map:this.map})),l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:n,className:"map-container",onLoad:this.onMapLoad},a)}}]),n}(c.Component);u.displayName="MapWithMarker"}).call(this,n(3))},56:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return u});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).state={coordinates:e.coordinates},a.onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var a=e.props.coordinates,n=a.lat,t=a.lng;e.setState({coordinates:[t+.001*Math.random(),n+.001*Math.random()]})},1e3)}},{key:"onMapLoad",value:function(e){this.map=e,this.forceUpdate()}},{key:"render",value:function(){var a,n=this.props.coordinates;return this.map&&(a=l.a.createElement(m.Marker,{coordinates:this.state.coordinates,map:this.map})),l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:n,className:"map-container",onLoad:this.onMapLoad},a)}}]),n}(c.Component);u.displayName="MapWithMovingMarker"}).call(this,n(3))},57:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return u});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"onMapLoad",value:function(e){this.map=e,this.forceUpdate()}},{key:"render",value:function(){var a,n=this.props.coordinates;if(this.map){var t=l.a.createElement("div",null,"Meaningful content on my Marker");a=l.a.createElement(m.Marker,{coordinates:n,map:this.map,popup:t,popupAnchor:"bottom",popupOffset:30})}return l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:n,className:"map-container",onLoad:this.onMapLoad},a)}}]),n}(c.Component);u.displayName="MarkerWithPopup"}).call(this,n(3))},58:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return u});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"onMapLoad",value:function(e){this.map=e,this.forceUpdate()}},{key:"render",value:function(){var a,n=this.props.coordinates;if(this.map){var t=l.a.createElement("div",null,"http://localhost");a=l.a.createElement(m.Marker,{coordinates:n,map:this.map,popup:t,popupAnchor:"bottom",popupOnOver:!0,popupOffset:20},l.a.createElement("span",{role:"img","aria-label":"Emoji Marker",style:{fontSize:"30px"}},"\ud83c\udfe2"))}return l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:n,className:"map-container",onLoad:this.onMapLoad},a)}}]),n}(c.Component);u.displayName="CustomMarker"}).call(this,n(3))},59:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return u});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"onMapLoad",value:function(e){this.map=e,this.forceUpdate()}},{key:"render",value:function(){var a,n=this.props.coordinates;return this.map&&(a=l.a.createElement(m.Circle,{key:"radius",id:"radius",coordinates:n,map:this.map,radius:330,unit:"feet",paint:{"fill-color":"#0074e4","fill-opacity":.33}})),l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:n,className:"map-container",onLoad:this.onMapLoad},a)}}]),n}(c.Component);u.displayName="MapWithCircle"}).call(this,n(3))},60:function(e,a,n){"use strict";(function(e){n.d(a,"a",function(){return M});var t=n(4),o=n(5),r=n(7),s=n(6),p=n(8),i=n(2),c=n(0),l=n.n(c),m=n(1),d=n.n(m),u={lat:48.868526,lng:2.3434886},h={lat:48.870362,lng:2.3400597},M=function(a){function n(e){var a;return Object(t.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,e))).onMapLoad=a.onMapLoad.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(n,a),Object(o.a)(n,[{key:"onMapLoad",value:function(e,a){this.map=e,this.forceUpdate();var n=m.Helpers.newBounds();n.extend(m.Helpers.newBound({lat:48.872198,lng:2.3366308})),n.extend(m.Helpers.newBound(u)),this.map.jumpTo(this.map.cameraForBounds(n,{padding:120}))}},{key:"render",value:function(){var a;if(this.map){var n=l.a.createElement("div",null,"Happy to be here"),t=l.a.createElement("div",null,"Old home");a=[l.a.createElement(m.Marker,{key:"haussmann",coordinates:{lat:48.872198,lng:2.3366308},map:this.map,popup:n,popupAnchor:"top-left",popupOnOver:!0,popupOffset:20},l.a.createElement("span",{role:"img","aria-label":"Emoji Marker",style:{fontSize:"30px"}},"\ud83c\udfe2")),l.a.createElement(m.Marker,{key:"sentier",coordinates:u,map:this.map,popup:t,popupAnchor:"bottom-right",popupOnOver:!0,popupOffset:20},l.a.createElement("span",{role:"img","aria-label":"Emoji Marker",style:{fontSize:"30px"}},"\ud83c\udfe0")),l.a.createElement(m.Circle,{key:"radius",id:"radius",coordinates:h,map:this.map,radius:500,unit:"meters",paint:{"fill-color":"#0074e4","fill-opacity":.33}})]}return l.a.createElement(d.a,{accessToken:e.ACCESS_TOKEN,coordinates:{lat:48.872198,lng:2.3366308},className:"map-container",onLoad:this.onMapLoad,withCompass:!0,withZoom:!0,withFullscreen:!0},a)}}]),n}(c.Component);M.displayName="AllInOne"}).call(this,n(3))},64:function(e,a,n){e.exports=n(65)},65:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(30),s=n.n(r),p=n(52);s.a.render(o.a.createElement(p.a,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5c7acbcc.chunk.js.map