import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

function ModalDemo() {
  const [basicModal, setBasicModal] = useState(false);
  const [smallModal, setSmallModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = () => {
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormModal(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Modal Component</h2>

      {/* Basic Modals */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Basic Modals</h3>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setBasicModal(true)}>Open Basic Modal</Button>
          <Button variant="secondary" onClick={() => setSmallModal(true)}>
            Small Modal
          </Button>
          <Button variant="outline" onClick={() => setLargeModal(true)}>
            Large Modal
          </Button>
        </div>
      </div>

      {/* Interactive Modals */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Interactive Modals</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => setFormModal(true)}>
            Contact Form Modal
          </Button>
          <Button variant="danger" onClick={() => setConfirmModal(true)}>
            Confirmation Modal
          </Button>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-semibold text-blue-900 mb-2">Modal Features:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Press ESC key to close</li>
          <li>• Click outside (overlay) to close</li>
          <li>• Prevents body scroll when open</li>
          <li>• Smooth animations</li>
          <li>• Fully accessible (ARIA attributes)</li>
        </ul>
      </div>

      {/* Basic Modal */}
      <Modal
        isOpen={basicModal}
        onClose={() => setBasicModal(false)}
        title="Welcome to Pivot Path"
      >
        <p className="text-slate-700 mb-4">
          This is a basic modal dialog. You can close it by clicking the X button, pressing ESC,
          or clicking outside the modal.
        </p>
        <p className="text-slate-600">
          Modals are perfect for displaying important information, forms, or confirmations without
          navigating away from the current page.
        </p>
      </Modal>

      {/* Small Modal */}
      <Modal
        isOpen={smallModal}
        onClose={() => setSmallModal(false)}
        title="Small Modal"
        size="sm"
      >
        <p className="text-slate-700">
          This is a small modal, perfect for simple messages or quick confirmations.
        </p>
      </Modal>

      {/* Large Modal */}
      <Modal
        isOpen={largeModal}
        onClose={() => setLargeModal(false)}
        title="Career Coaching Services"
        size="lg"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Our Services</h3>
          
          <div className="space-y-3">
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-semibold text-slate-900">LinkedIn Profile Optimization</h4>
              <p className="text-slate-600 text-sm">
                Get your profile reviewed and optimized by an expert. Increase your visibility and
                attract recruiters.
              </p>
            </div>

            <div className="border-l-4 border-cyan-600 pl-4">
              <h4 className="font-semibold text-slate-900">Resume Review</h4>
              <p className="text-slate-600 text-sm">
                Professional resume optimization to help you stand out and land more interviews.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-slate-900">Career Coaching Package</h4>
              <p className="text-slate-600 text-sm">
                4-week intensive program to help you transition to your dream role.
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        title="Contact Us"
        size="md"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setFormModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              Send Message
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Textarea
            label="Message"
            placeholder="How can we help you?"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Cancel Subscription"
        size="sm"
        closeOnOverlayClick={false}
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setConfirmModal(false)}>
              Keep Subscription
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                alert('Subscription cancelled');
                setConfirmModal(false);
              }}
            >
              Yes, Cancel
            </Button>
          </div>
        }
      >
        <p className="text-slate-700">
          Are you sure you want to cancel your subscription? You will lose access to all coaching
          materials and scheduled sessions.
        </p>
      </Modal>
    </section>
  );
}

export default ModalDemo;
