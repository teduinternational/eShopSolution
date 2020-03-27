# ASP.NET Core 3.1 project from TEDU
## Technologies
- ASP.NET Core 3.1
- Entity Framework Core 3.1
## Install Tools
- .NET Core SDK 3.1
- Git client
- Visual Studio 2019
- SQL Server 2019
## Youtube tutorial
- Video list: https://www.youtube.com/playlist?list=PLRhlTlpDUWsyN_FiVQrDWMtHix_E2A_UD
- TEDU Course: https://tedu.com.vn/khoa-hoc/lam-du-an-voi-aspnet-core-31-34.html
## How to configure and run
- Clone code from Github: git clone https://github.com/teduinternational/eShopSolution
- Open solution eShopSolution.sln in Visual Studio 2019
- Set startup project is eShopSolution.Data
- Change connection string in Appsetting.json in eShopSolution.Data project
- Open Tools --> Nuget Package Manager -->  Package Manager Console in Visual Studio
- Run Update-database and Enter.
- After migrate database successful, set Startup Project is eShopSolution.WebApp
- Change database connection in appsettings.Development.json in eShopSolution.WebApp project.
- Choose profile to run or press F5
## How to contribute
- Fork and create your branch
- Create Pull request to us.

## Admin template: https://startbootstrap.com/templates/sb-admin/