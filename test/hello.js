// Generated by js_of_ocaml 2.5
(function(F){"use strict";var
n=1024,k=128,d="",r=" : file already exists",x="/",y="fd ";function
O(a,b){throw[0,a,b]}function
Q(a,b){if(b.repeat)return b.repeat(a);var
c=d,e=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;e++;if(e==9)b.slice(0,1)}}function
Y(a,b,c){var
e=new
Array(c);for(var
d=0;d<c;d++)e[d]=a[b+d];return e}function
v(a,b,c){var
e=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return e.apply(null,a);var
f=d;for(;0<c;b+=n,c-=n)f+=e.apply(null,Y(a,b,Math.min(c,n)));return f}function
H(a){if(a.t==2)a.c+=Q(a.l-a.c.length,"\0");else
a.c=v(a.c,0,a.c.length);a.t=0}function
K(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
V(a){for(var
l=d,e=d,h,g,i,b,c=0,j=a.length;c<j;c++){g=a.charCodeAt(c);if(g<k){for(var
f=c+1;f<j&&(g=a.charCodeAt(f))<k;f++);if(f-c>512){e.substr(0,1);l+=e;e=d;l+=a.slice(c,f)}else
e+=a.slice(c,f);if(f==j)break;c=f}b=1;if(++c<j&&((i=a.charCodeAt(c))&-64)==k){h=i+(g<<6);if(g<224){b=h-12416;if(b<k)b=1}else{b=2;if(++c<j&&((i=a.charCodeAt(c))&-64)==k){h=i+(h<<6);if(g<240){b=h-925824;if(b<2048||b>=55295&&b<57344)b=2}else{b=3;if(++c<j&&((i=a.charCodeAt(c))&-64)==k&&g<245){b=i-63447168+(h<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;e+="\ufffd"}else
if(b>65535)e+=String.fromCharCode(55232+(b>>10),56320+(b&1023));else
e+=String.fromCharCode(b);if(e.length>n){e.substr(0,1);l+=e;e=d}}return l+e}function
U(a){switch(a.t){case
9:return a.c;default:H(a);case
0:if(K(a.c)){a.t=9;return a.c}a.t=8;case
8:return V(a.c)}}function
i(a,b,c){this.t=a;this.c=b;this.l=c}i.prototype={toString:function(){return U(this)}};function
c(a){return new
i(0,a,a.length)}function
E(a,b){O(a,c(b))}var
e=[0];function
f(a){E(e[2],a)}function
u(a){if(!a.opened)f("Cannot flush a closed channel");if(a.buffer==d)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=d;return 0}function
A(a){E(e[4],a)}function
j(a){if(a<0)A("String.create");return new
i(a?2:9,d,a)}function
g(a){this.data=a}g.prototype={truncate:function(){this.data=j(0)}};function
l(a){return a.l}function
D(a){a=a
instanceof
i?a.toString():a;f(a+": No such file or directory")}var
I=x;function
o(a){a=a
instanceof
i?a.toString():a;if(a.charCodeAt(0)!=47)a=I+a;var
e=a.split(x),b=[];for(var
c=0;c<e.length;c++)switch(e[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(d);break;default:b.push(e[c]);break}b.orig=a;return b}function
h(){this.content={}}h.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
q=new
h();q.mk(d,new
h());function
t(a){var
b=q;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))D(a.orig);b=b.get(a[c])}return b}function
T(a){var
c=o(a),b=t(c);return b
instanceof
h?1:0}function
R(a){return new
i(4,a,a.length)}function
z(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
Z(a){if(a.t!=4)z(a);return a.c}function
J(a,b){var
j=o(a),d=q;for(var
k=0;k<j.length-1;k++){var
e=j[k];if(!d.exists(e))d.mk(e,new
h());d=d.get(e);if(!(d
instanceof
h))f(j.orig+r)}var
e=j[j.length-1];if(d.exists(e))f(j.orig+r);if(b
instanceof
h)d.mk(e,b);else
if(b
instanceof
g)d.mk(e,b);else
if(b
instanceof
i)d.mk(e,new
g(b));else
if(b
instanceof
Array)d.mk(e,new
g(R(b)));else
if(b.toString)d.mk(e,new
g(c(b.toString())));else
A("caml_fs_register");return 0}function
S(a){var
b=q,d=o(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
m(a,b,c){if(e.fds===undefined)e.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?l(b.data):0;d.flags=c;e.fds[a]=d;e.fd_last_idx=a;return a}function
_(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
h=a.toString(),k=o(a);if(d.rdonly&&d.wronly)f(h+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)f(h+" : flags Open_text and Open_binary are not compatible");if(S(a)){if(T(a))f(h+" : is a directory");if(d.create&&d.excl)f(h+r);var
i=e.fd_last_idx?e.fd_last_idx:0,g=t(k);if(d.truncate)g.truncate();return m(i+1,g,d)}else
if(d.create){var
i=e.fd_last_idx?e.fd_last_idx:0;J(a,j(0));var
g=t(k);return m(i+1,g,d)}else
D(a)}m(0,new
g(j(0)));m(1,new
g(j(0)));m(2,new
g(j(0)));function
L(a){var
b=e.fds[a];if(b.flags.wronly)f(y+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true}}function
s(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?v(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?v(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)z(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
W(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=F.console;b&&b.error&&b.error(a)}function
X(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=F.console;b&&b.log&&b.log(a)}var
p=new
Array();function
P(a,b){var
h=c(b),d=l(h),g=l(a.file.data),f=a.offset;if(f+d>=g){var
e=j(f+d);s(a.file.data,0,e,0,g);s(h,0,e,f,d);a.file.data=e}a.offset+=d;return 0}function
B(a){var
b;switch(a){case
1:b=X;break;case
2:b=W;break;default:b=P}var
g=e.fds[a];if(g.flags.rdonly)f(y+a+" is readonly");var
c={file:g.file,offset:g.offset,fd:a,opened:true,buffer:d,output:b};p[c.fd]=c;return c}function
M(){var
a=0;for(var
b
in
p)if(p[b].opened)a=[0,p[b],a];return a}function
C(a,b,c,d){if(!a.opened)f("Cannot output to a closed channel");var
g;if(c==0&&l(b)==d)g=b;else{g=j(d);s(b,c,g,0,d)}var
e=g.toString(),h=e.lastIndexOf("\n");if(h<0)a.buffer+=e;else{a.buffer+=e.substr(0,h+1);u(a);a.buffer+=e.substr(h+1)}return 0}function
N(a,b){var
d=c(String.fromCharCode(b));C(a,d,0,1);return 0}function
a(a,b){e[a+1]=b}var
w=c("Hello world!");a(11,[0,c("Undefined_recursive_module")]);a(10,[0,c("Assert_failure")]);a(9,[0,c("Sys_blocked_io")]);a(8,[0,c("Stack_overflow")]);a(7,[0,c("Match_failure")]);a(6,[0,c("Not_found")]);a(5,[0,c("Division_by_zero")]);a(4,[0,c("End_of_file")]);a(3,[0,c("Invalid_argument")]);a(2,[0,c("Failure")]);a(1,[0,c("Sys_error")]);a(0,[0,c("Out_of_memory")]);L(0);var
b=B(1);B(2);C(b,w,0,l(w));N(b,10);u(b);function
G(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{u(d)}catch(f){}var
b=c;continue}return 0}}G(M(0));return}(function(){return this}()));
