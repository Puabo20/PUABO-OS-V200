// MongoDB initialization script
db = db.getSiblingDB('puabo-os');

// Create collections
db.createCollection('users');
db.createCollection('profiles');
db.createCollection('uploads');
db.createCollection('programs');
db.createCollection('applications');
db.createCollection('transactions');
db.createCollection('notifications');
db.createCollection('playlists');
db.createCollection('streams');

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });
db.uploads.createIndex({ userId: 1 });
db.uploads.createIndex({ createdAt: -1 });
db.programs.createIndex({ userId: 1 });
db.programs.createIndex({ scheduledTime: 1 });
db.transactions.createIndex({ userId: 1 });
db.transactions.createIndex({ createdAt: -1 });
db.notifications.createIndex({ userId: 1 });
db.notifications.createIndex({ read: 1 });

// Insert sample data (optional - for development)
if (db.users.countDocuments() === 0) {
  db.users.insertMany([
    {
      username: 'admin',
      email: 'admin@puabo.com',
      password: '$2a$12$hash...', // bcrypt hash of 'admin123'
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'demo_creator',
      email: 'creator@example.com', 
      password: '$2a$12$hash...', // bcrypt hash of 'creator123'
      role: 'creator',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  
  print('Sample users created');
}

print('Database initialized successfully');