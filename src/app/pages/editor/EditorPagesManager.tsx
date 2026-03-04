import React from 'react';
import AdminPagesManager from '../admin/AdminPagesManager';

// Editor has same interface as admin but with limited permissions
export default function EditorPagesManager() {
  return <AdminPagesManager />;
}
