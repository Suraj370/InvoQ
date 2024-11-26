'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Download } from 'lucide-react';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export default function Home() {
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: '', quantity: 0, price: 0 },
  ]);
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [clientDetails, setClientDetails] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');

  const addItem = () => {
    setItems([...items, { description: '', quantity: 0, price: 0 }]);
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: field === 'description' ? value : Number(value),
    };
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  const handleDownload = () => {
    // Create the invoice content
    const invoiceContent = `
      Invoice #${invoiceNumber}
      Date: ${invoiceDate}

      From:
      ${companyDetails.name}
      ${companyDetails.address}
      ${companyDetails.email}
      ${companyDetails.phone}

      To:
      ${clientDetails.name}
      ${clientDetails.address}
      ${clientDetails.email}
      ${clientDetails.phone}

      Items:
      ${items.map(item => `
        ${item.description}
        Quantity: ${item.quantity}
        Price: $${item.price}
        Subtotal: $${item.quantity * item.price}
      `).join('\n')}

      Total: $${calculateTotal().toFixed(2)}
    `;

    // Create blob and download
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice-${invoiceNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Invoice Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Side - Input Form */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Invoice Number</Label>
                <Input
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="INV-001"
                />
              </div>
              <div>
                <Label>Date</Label>
                <Input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Company Details</h2>
            <div className="space-y-4">
              <div>
                <Label>Company Name</Label>
                <Input
                  value={companyDetails.name}
                  onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  value={companyDetails.address}
                  onChange={(e) => setCompanyDetails({ ...companyDetails, address: e.target.value })}
                  placeholder="Company Address"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={companyDetails.email}
                  onChange={(e) => setCompanyDetails({ ...companyDetails, email: e.target.value })}
                  placeholder="company@example.com"
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  value={companyDetails.phone}
                  onChange={(e) => setCompanyDetails({ ...companyDetails, phone: e.target.value })}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Client Details</h2>
            <div className="space-y-4">
              <div>
                <Label>Client Name</Label>
                <Input
                  value={clientDetails.name}
                  onChange={(e) => setClientDetails({ ...clientDetails, name: e.target.value })}
                  placeholder="Client Name"
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  value={clientDetails.address}
                  onChange={(e) => setClientDetails({ ...clientDetails, address: e.target.value })}
                  placeholder="Client Address"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={clientDetails.email}
                  onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                  placeholder="client@example.com"
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  value={clientDetails.phone}
                  onChange={(e) => setClientDetails({ ...clientDetails, phone: e.target.value })}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <Label>Description</Label>
                    <Input
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                      placeholder="Item description"
                    />
                  </div>
                  <div className="col-span-3">
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                      placeholder="0"
                    />
                  </div>
                  <div className="col-span-3">
                    <Label>Price</Label>
                    <Input
                      type="number"
                      value={item.price}
                      onChange={(e) => updateItem(index, 'price', e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addItem} variant="outline" className="w-full">
                Add Item
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Side - Preview */}
        <div className="space-y-6">
          <Card className="p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Invoice Preview</h2>
              <Button onClick={handleDownload} className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download
              </Button>
            </div>
            
            <div className="space-y-6 bg-white p-6 rounded-lg border">
              {/* Invoice Header */}
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-xl">{companyDetails.name || 'Your Company'}</h3>
                  <p className="text-sm text-gray-600">{companyDetails.address}</p>
                  <p className="text-sm text-gray-600">{companyDetails.email}</p>
                  <p className="text-sm text-gray-600">{companyDetails.phone}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Invoice #{invoiceNumber || 'INV-001'}</p>
                  <p className="text-sm text-gray-600">Date: {invoiceDate || 'Select date'}</p>
                </div>
              </div>

              {/* Client Details */}
              <div className="border-t pt-4">
                <p className="font-bold mb-2">Bill To:</p>
                <h3 className="font-semibold">{clientDetails.name || 'Client Name'}</h3>
                <p className="text-sm text-gray-600">{clientDetails.address}</p>
                <p className="text-sm text-gray-600">{clientDetails.email}</p>
                <p className="text-sm text-gray-600">{clientDetails.phone}</p>
              </div>

              {/* Items Table */}
              <div className="border-t pt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Qty</th>
                      <th className="text-right py-2">Price</th>
                      <th className="text-right py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{item.description || 'Item description'}</td>
                        <td className="text-right py-2">{item.quantity}</td>
                        <td className="text-right py-2">${item.price.toFixed(2)}</td>
                        <td className="text-right py-2">${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold">Total Amount:</p>
                  <p className="font-bold text-xl">${calculateTotal().toFixed(2)}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
