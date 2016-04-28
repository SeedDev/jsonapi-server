
### Debugging

Debug output is provided by the [debug](https://www.npmjs.com/package/debug) module.

The supported namespaces are:

 - jsonApi:handler:search
 - jsonApi:handler:find
 - jsonApi:handler:create
 - jsonApi:handler:delete
 - jsonApi:handler:update
 - jsonApi:validation:input
 - jsonApi:validation:output
 - jsonApi:include
 - jsonApi:filter
 - jsonApi:errors
 - jsonApi:requestCounter


To view the debugging output, provide a comma separated list (or wildcarded via `*`) of namespaces in the `DEBUG` environment variable, for example:
```
$ DEBUG=jsonApi:handler:find npm test
```
```
$ DEBUG=jsonApi:handler:* npm test
```

### Integration with application logging

If you wish to integrate `jsonapi-server` debug output with your application's logging solution, you can override the functions that are invoked for generating the output of each of the supported namespaces by invoking the package's `debugging.__setLoggers(loggerFactory)` function where the `loggerFactory` parameter is a function that expects a namespace string parameter and returns a logger function for the namespace.
