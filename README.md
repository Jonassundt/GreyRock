# GreyRock Note-sharing system

# Hosted on `https://greyrock.onrender.com`

The **GreyRock Note-sharing System** is a React-based application designed to facilitate communication among employees at GreyRock, a fictional asset management firm that specializes in both physical and digital assets.


## Features
- **User Authentication**: Log in is required to access the application. A user must log in at least once per week, otherwise, they will be automatically logged out.
- **User Roles**: There are three user roles - Employee, Manager, and Admin.
- **Note Creation**: Employees can create notes.
- **User Management**: Managers and admins have the ability to add and remove users. The users 'Arne' (Admin), 'Mike' (Manager), and 'Einar' (Employee) cannot be altered.
- **Note Management**: Notes can be marked as ‘open’ or ‘completed’. Only managers or admins can delete notes. Employees can only view their own notes.

## Technology Used
- **Frontend**: ReactJS
- **Backend**: NodeJS with Express
- **Database**: MongoDB
- **Authentication**: bcrypt, jwt
- **State Management**: Redux
- **Routing**: react-router
- **Other**: CORS, Mongoose, cookie-parser

## Login Details (case sensitive)
- **Admin**: 'Arne', '123456'
- **Manager**: 'Mike', '123456'
- **Employee**: 'Einar', '123456'
