(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),o=(n(90),n(91),n(92),n(16)),i=n.n(o),u=n(27),d=n(11);function l(){return JSON.parse(localStorage.getItem("currentDeck"))||[]}function j(e){localStorage.setItem("currentDeck",JSON.stringify(e))}function b(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(i.a.mark((function e(){var t,n,a,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",{id:a.deck_id});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(i.a.mark((function e(){var t,n,a,c,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n=l(),e.next=4,fetch("https://deckofcardsapi.com/api/deck/"+n+"/draw/?count="+t);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",{cards:c.cards});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(2),O=Object(a.createContext)();function m(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),o=Object(d.a)(s,2),l=o[0],f=o[1],x=Object(a.useState)([]),m=Object(d.a)(x,2),k=m[0],v=m[1],g=Object(a.useState)(!1),w=Object(d.a)(g,2),y=w[0],C=w[1],H=Object(a.useCallback)((function(){f([]),v([]),function(){S.apply(this,arguments)}(),C(!1)}),[]);function S(){return(S=Object(u.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(6);case 2:return t=e.sent,r(t.id),j(t.id),e.next=7,h(2);case 7:return n=e.sent,f(n.cards),e.next=11,h();case 11:a=e.sent,v(a.cards);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=Object(a.useCallback)((function(e){f(l.concat(e))}),[l,f]),D=Object(a.useCallback)((function(e){v(k.concat(e))}),[k,v]),N=Object(a.useCallback)((function(e){C(!0)}),[C]),P=Object(a.useCallback)((function(){f([]),v([])}),[f,v]),A=Object(a.useMemo)((function(){return{deck:c,hand:l,bankHand:k,addCardsToHand:B,addCardsToBankHand:D,newDeck:H,resetHands:P,gameFinished:y,stopGame:N}}),[c,l,k,B,D,H,P,y,N]);return Object(p.jsx)(O.Provider,{value:A,children:e.children})}var k=function(){return Object(a.useContext)(O)},v=n(147),g=n(148),w=n(78),y=["0","J","Q","K"];function C(e){var t=e.code.charAt(0);return"A"===t?1:y.includes(t)?10:parseInt(t)}function H(e){var t,n=0,a=0,c=Object(w.a)(e);try{for(c.s();!(t=c.n()).done;){var r=C(t.value);1===r?a++:n+=r}}catch(o){c.e(o)}finally{c.f()}for(var s=0;s<a;s++)n+=n>10?1:11;return n}var S={Draw:"Draw a card or pass your turn to the bank!",Bust:"Oh oh, busted! You've got more than 21...",Won:"Congratulations, you beat the bank and won the game!",Lost:"Unfortunately you lost this time. Better luck next time!",Tie:"You tied with the bank, try again!",Pass:"You pass your turn to the bank, draw cards for them until they reach 17.",Blackjack:"You've go 21, woohoow! You win the game."},B=n(144),D=n(145),N=n(23),P=n.n(N),A=P()({text:{fontSize:20,marginBottom:5}});function F(e){var t=A(),n=e.isPlayer,a=e.cards;return Object(p.jsxs)(D.a,{children:[Object(p.jsx)(B.a,{className:t.text,children:!0===n?"Player's Hand":"Bank's Hand"}),a.map((function(e,t){return Object(p.jsx)(D.a,{component:"img",alt:e.code,src:e.image,width:100},e.image+"_"+t)}))]})}function E(e){var t=e.playerHand,n=e.bankHand;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g.a,{mt:3,children:Object(p.jsx)(F,{isPlayer:!0,cards:t})}),Object(p.jsx)(g.a,{mt:3,children:Object(p.jsx)(F,{isPlayer:!1,cards:n})})]})}var T=P()({text:{fontSize:24},button:{backgroundColor:"white",color:"#BEA543",margin:10}});function I(e){var t=T(),n=e.hand,a=e.bankHand,c=e.handleDrawCard,r=e.pass;return Object(p.jsxs)(g.a,{sx:{display:"flex",textAlign:"left",justifyContent:"space-evenly",width:"60%",marginLeft:"20%"},children:[Object(p.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(p.jsx)(B.a,{className:t.text,children:"Player: "+H(n)}),Object(p.jsx)(B.a,{className:t.text,children:"Bank: "+H(a)})]}),Object(p.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(p.jsx)(v.a,{onClick:c,className:t.button,children:"Draw Card"}),Object(p.jsx)(v.a,{onClick:r,className:t.button,children:"Pass"})]})]})}var J=P()({root:{backgroundColor:"#1A5E2B",display:"flex",justifyContent:"center",color:"#BEA543",height:"100vh",textAlign:"center",width:"100vw"},text:{fontSize:24}});function L(e){var t=J(),n=e.hand,a=e.bankHand,c=e.handleDrawCard,r=e.pass,s=e.message;return Object(p.jsx)(g.a,{className:t.root,children:Object(p.jsxs)(g.a,{sx:{width:"100vw"},children:[Object(p.jsx)(I,{hand:n,bankHand:a,handleDrawCard:c,pass:r}),Object(p.jsx)(g.a,{m:3,children:Object(p.jsx)(B.a,{className:t.text,children:s})}),Object(p.jsx)(E,{playerHand:n,bankHand:a})]})})}function Y(){var e=k(),t=e.hand,n=e.addCardsToHand,c=e.bankHand,r=e.addCardsToBankHand,s=e.gameFinished,o=e.stopGame,l=Object(a.useState)([S.Draw]),j=Object(d.a)(l,2),b=j[0],f=j[1],x=Object(a.useState)(!0),O=Object(d.a)(x,2),m=O[0],v=O[1];Object(a.useEffect)((function(){!1===s&&f(S.Draw)}),[s]);var g=Object(a.useCallback)((function(){var e=H(t),n=H(c);function a(){o(),v(!0)}m?(e>21&&(f(S.Bust),a()),21===e&&(f(S.Blackjack),a())):n>21?(f(S.Won),a()):n>16&&(n===e?f(S.Tie):n<e?f(S.Won):n>e&&f(S.Lost),a())}),[o,c,t,m]);function w(){return(w=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h();case 4:t=e.sent,!0===m?n(t.cards):r(t.cards);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){g()}),[t,c,g]),Object(p.jsx)(L,{hand:t,bankHand:c,handleDrawCard:function(){!function(){w.apply(this,arguments)}()},pass:function(){!0!==s&&(v(!1),f(S.Pass))},message:b})}var z=P()({bar:{backgroundColor:"#1A5E2B"},button:{fontSize:"x-large",backgroundColor:"#BEA543",color:"white",margin:20}});function G(){var e=z(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],r=n[1],s=k(),o=s.newDeck,i=s.resetHands;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(g.a,{className:e.bar,sx:{display:"flex",justifyContent:"center"},children:[Object(p.jsx)(v.a,{className:e.button,onClick:function(){i(),o(),r(!0)},children:"New Game"}),Object(p.jsx)(v.a,{className:e.button,onClick:function(){r(!1)},children:"Stop Game"})]}),!0===c?Object(p.jsx)(Y,{}):null]})}var W=n(146);function _(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)(W.a,{fixed:"top",className:"p-0 shadow-sm"})}),Object(p.jsx)(G,{})]})}var M=function(){return Object(p.jsx)(m,{children:Object(p.jsx)(_,{})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),K()},90:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.73943dcb.chunk.js.map