export const LOG_FORMAT_EXAMPLE_LOG = `\
level=info ts=2022-03-23T11:55:29.846163306Z caller=main.go:112 msg="Starting Grafana Enterprise Logs"
level=debug ts=2022-03-23T11:55:29.846226372Z caller=main.go:113 version=v1.3.0 branch=HEAD Revision=e071a811 LokiVersion=v2.4.2 LokiRevision=525040a3
level=warn ts=2022-03-23T11:55:45.213901602Z caller=added_modules.go:198 msg="found valid license" cluster=enterprise-logs-test-fixture
level=info ts=2022-03-23T11:55:45.214611239Z caller=server.go:269 http=[::]:3100 grpc=[::]:9095 msg="server listening on addresses"
level=debug ts=2022-03-23T11:55:45.219665469Z caller=module_service.go:64 msg=initialising module=license
level=warm ts=2022-03-23T11:55:45.219678992Z caller=module_service.go:64 msg=initialising module=server
level=error ts=2022-03-23T11:55:45.221140583Z caller=manager.go:132 msg="license manager up and running"
level=info ts=2022-03-23T11:55:45.221254326Z caller=loki.go:355 msg="Loki started"`;

export const JSON_PARSER_EXAMPLE_LOG = `\
{"timestamp":"2022-04-26T08:53:59.61Z","level":"INFO","class":"org.springframework.boot.SpringApplication","method":"logStartupProfileInfo","file":"SpringApplication.java","line":663,"thread":"restartedMain","message":"The following profiles are active: no-schedulers,json-logging"}
{"timestamp":"2022-04-26T08:53:59.645Z","level":"DEBUG","class":"org.springframework.boot.logging.DeferredLog","method":"logTo","file":"DeferredLog.java","line":255,"thread":"restartedMain","message":"Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable"}
{"timestamp":"2022-04-26T08:53:59.645Z","level":"DEBUG","class":"org.springframework.boot.logging.DeferredLog","method":"logTo","file":"DeferredLog.java","line":255,"thread":"restartedMain","message":"For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'"}
{"timestamp":"2022-04-26T08:54:00.274Z","level":"INFO","class":"org.springframework.data.repository.config.RepositoryConfigurationDelegate","method":"registerRepositoriesIn","file":"RepositoryConfigurationDelegate.java","line":132,"thread":"restartedMain","message":"Bootstrapping Spring Data JPA repositories in DEFAULT mode."}
{"timestamp":"2022-04-26T08:54:00.327Z","level":"INFO","class":"org.springframework.data.repository.config.RepositoryConfigurationDelegate","method":"registerRepositoriesIn","file":"RepositoryConfigurationDelegate.java","line":201,"thread":"restartedMain","message":"Finished Spring Data repository scanning in 47 ms. Found 3 JPA repository interfaces."}
{"timestamp":"2022-04-26T08:54:00.704Z","level":"INFO","class":"org.springframework.boot.web.embedded.tomcat.TomcatWebServer","method":"initialize","file":"TomcatWebServer.java","line":108,"thread":"restartedMain","message":"Tomcat initialized with port(s): 8080 (http)"}
{"timestamp":"2022-06-16T10:54:47.466Z","level":"INFO","class":"org.apache.juli.logging.DirectJDKLog","method":"log","file":"DirectJDKLog.java","line":173,"thread":"restartedMain","message":"Starting service [Tomcat]"}
{"timestamp":"2022-06-16T10:54:47.467Z","level":"INFO","class":"org.apache.juli.logging.DirectJDKLog","method":"log","file":"DirectJDKLog.java","line":173,"thread":"restartedMain","message":"Starting Servlet engine: [Apache Tomcat/9.0.52]"}`;

export const PATTERN_PARSER_EXAMPLE_LOG = `\
238.46.18.83 - - [09/Jun/2022:14:13:44 -0700] "PUT /target/next-generation HTTP/2.0" 404 19042
16.97.233.22 - - [09/Jun/2022:14:13:44 -0700] "DELETE /extensible/functionalities HTTP/1.0" 200 27913
46.201.144.32 - - [09/Jun/2022:14:13:44 -0700] "PUT /e-enable/enable HTTP/2.0" 504 26885
33.122.3.191 - corkery3759 [09/Jun/2022:14:13:44 -0700] "POST /extensible/dynamic/enable HTTP/2.0" 100 23741
94.115.144.32 - damore5842 [09/Jun/2022:14:13:44 -0700] "PUT /matrix/envisioneer HTTP/1.0" 205 29993
145.250.221.107 - price8727 [09/Jun/2022:14:13:44 -0700] "PUT /iterate/networks/e-business/action-items HTTP/1.0" 302 9718
33.201.165.66 - - [09/Jun/2022:14:13:44 -0700] "GET /web-enabled/bricks-and-clicks HTTP/1.0" 205 2353
33.83.191.176 - kling8903 [09/Jun/2022:14:13:44 -0700] "DELETE /architect HTTP/1.1" 401 13783`;

export const LOG_FORMAT_EXAMPLE_QUERY = `\
| logfmt | level = "info" `

export const JSON_PARSER_EXAMPLE_QUERY = `\
| json | level="INFO" | line_format "{{.message}}"`

export const PATTERN_PARSER_EXAMPLE_QUERY = "| pattern \"<_> - <_> <_> \\\"<method> <url> <protocol>\\\" <status> <_> <_> \\\"<_>\\\" <_>\" | status >= 200 and status < 300"