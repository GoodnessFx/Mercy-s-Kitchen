import { CartItem } from '../context/CartContext';

const WHATSAPP_NUMBER = '2349121772238';

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const generateSingleItemMessage = (
  itemName: string,
  portion: string,
  price: number,
  quantity: number,
  specialInstructions?: string
): string => {
  return `Hi Mercy! 👋 I'd like to place a food order:

🍽️ Item: ${itemName}
📦 Quantity/Package: ${portion} (${quantity}x)
${specialInstructions ? `🌶️ Special Instructions: ${specialInstructions}\n` : ''}💰 Estimated Total: ₦${(price * quantity).toLocaleString()}

📅 I need it by: [Please specify date & time]
📍 Deliver to: [Your address/area in Makurdi]
📱 My number: [Your phone number]

Please confirm availability. Thank you! 🙏`;
};

export const generateCartMessage = (
  cart: CartItem[],
  total: number,
  deliveryDetails?: {
    date?: string;
    time?: string;
    address?: string;
    phone?: string;
    name?: string;
  }
): string => {
  const itemsList = cart
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} - ${item.portion} (${item.quantity}x) = ₦${(
          item.price * item.quantity
        ).toLocaleString()}${
          item.specialInstructions ? `\n   Special: ${item.specialInstructions}` : ''
        }`
    )
    .join('\n');

  return `Hi Mercy! 👋 I'd like to place a food order:

📋 ORDER DETAILS:
${itemsList}

💰 Total: ₦${total.toLocaleString()}
${deliveryDetails?.date ? `📅 Event Date: ${deliveryDetails.date}${deliveryDetails.time ? ` at ${deliveryDetails.time}` : ''}\n` : ''}${deliveryDetails?.address ? `📍 Delivery Address: ${deliveryDetails.address}\n` : ''}${deliveryDetails?.phone ? `📱 Phone: ${deliveryDetails.phone}\n` : ''}${deliveryDetails?.name ? `👤 Name: ${deliveryDetails.name}\n` : ''}
Please confirm availability and total cost. Thank you! 🙏`;
};

export const generateEventInquiryMessage = (
  eventType: string,
  guestCount: number,
  eventDate: string,
  budget?: string
): string => {
  return `Hi Mercy! 👋 I'm planning an event and need catering:

🎉 Event Type: ${eventType}
👥 Guest Count: ${guestCount} people
📅 Event Date: ${eventDate}
${budget ? `💰 Budget Range: ${budget}\n` : ''}
I'd love to discuss package options. Please get back to me. Thank you! 🙏`;
};

export const openWhatsApp = (message: string): void => {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank');
};
