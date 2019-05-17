// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

const stripe = require('stripe')('sk_test_ZhPRczzPc38M67taa8x14w2N00IesVU1LX');

(async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: 'Background Check',
      description: 'A Detailed Background Check',
      images: ['https://backgroundcheck.netlify.com/background.png'],
      amount: 25,
      currency: 'usd',
      quantity: 1,
    }],
    success_url: 'https://backgroundcheck.netlify.com/success',
    cancel_url: 'https://backgroundcheck.netlify.com/cancel',
  });
})();


