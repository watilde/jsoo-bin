jsoo-bin
========

Binary wrapper for [js_of_ocaml](https://github.com/ocsigen/js_of_ocaml)

## Getting started

### Install
```
$ npm install -g jsoo-bin
```

### Usage
```
$ jsoo -h Usage: jsoo <ml files> -o <out file name>
```

### Example
```
$ cat hello.ml
print_endline "Hello world!";;

$ jsoo hello.ml -o hello.js
$ ls
hello.cmi hello.cmo hello.js  hello.ml

$ node hello.js
Hello world!

```
