/*! 
File Name: Server/Util/index.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022
Last Updated: October 26, 2022

Utility functions to be used throughout the application
*/

import express from 'express';

// Convenience function to return the DisplayName of the User
export function UserDisplayName(req: express.Request): string {
    if(req.user) {
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// Helper middleware function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void {
    if(!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next();
}