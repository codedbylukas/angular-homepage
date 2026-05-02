#/bin/bash

gitleaks detect --verbose
gitleaks dir . --verbose --no-git
gitleaks protect --staged --verbose
gitleaks detect --report-format sarif --report-path leaks.sarif
gitleaks detect --report-format csv --report-path leaks.csv
gitleaks detect --verbose --redact=0
