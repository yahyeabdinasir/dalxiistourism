// Simple test script for Dalxiis Tourism Backend API
// Run with: node test-api.js

const API_BASE = 'http://localhost:5000/api';

async function testHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`);
    const data = await response.json();
    console.log('✅ Health Check:', data);
  } catch (error) {
    console.error('❌ Health Check Failed:', error.message);
  }
}

async function testContactForm() {
  try {
    const contactData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      message: 'This is a test message from the API test script. I am interested in your tourism services!'
    };

    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Contact Form Test:', data);
    } else {
      console.log('❌ Contact Form Test Failed:', data);
    }
  } catch (error) {
    console.error('❌ Contact Form Test Error:', error.message);
  }
}

async function testRateLimit() {
  try {
    console.log('🧪 Testing rate limiting...');
    
    // Send multiple requests quickly
    for (let i = 1; i <= 6; i++) {
      const contactData = {
        firstName: `Test${i}`,
        lastName: 'User',
        email: `test${i}@example.com`,
        message: `Test message ${i}`
      };

      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      
      if (response.status === 429) {
        console.log(`✅ Rate limit hit after ${i} requests:`, data);
        break;
      } else if (response.ok) {
        console.log(`✅ Request ${i} successful`);
      } else {
        console.log(`❌ Request ${i} failed:`, data);
      }
    }
  } catch (error) {
    console.error('❌ Rate Limit Test Error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  await testHealth();
  console.log('');
  
  await testContactForm();
  console.log('');
  
  await testRateLimit();
  console.log('');
  
  console.log('✨ API Tests completed!');
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTests();
}
