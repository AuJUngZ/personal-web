# Terraform: Infrastructure as Code Made Simple

Terraform by HashiCorp enables you to define and provision infrastructure using declarative configuration files.

## Why Terraform?

- **Multi-cloud support**
- **Declarative syntax**
- **State management**
- **Modular design**

## Basic Configuration

```hcl
# main.tf
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
  }
}
```

## Essential Commands

```bash
terraform init    # Initialize working directory
terraform plan    # Preview changes
terraform apply   # Apply changes
terraform destroy # Destroy resources
```

Start managing your infrastructure as code today!
