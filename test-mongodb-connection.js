// Test MongoDB connection
const { MongoClient } = require('mongodb');
require('dotenv').config();

async function testConnection() {
    const uri = process.env.MONGODB_URI || "mongodb+srv://24uglyandrew:weaklings162@sanricosite.vgnc0qj.mongodb.net/";
    const client = new MongoClient(uri);
    
    try {
        console.log('🔗 Connecting to MongoDB...');
        await client.connect();
        
        console.log('✅ Connected to MongoDB!');
        
        // Test database access
        const db = client.db(process.env.DATABASE_NAME || "MyProductsDb");
        const collections = await db.listCollections().toArray();
        console.log('📊 Available collections:', collections.map(c => c.name));
        
        // Test products collection
        const products = db.collection("Products");
        const count = await products.countDocuments();
        console.log(`📦 Products count: ${count}`);
        
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
    } finally {
        await client.close();
    }
}

testConnection();
