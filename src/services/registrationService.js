/**
 * Registration Validation & State Service
 */

export const validateRegistrationForm = (formData, event) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Full Name is required (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = 'A valid email address is required (e.g. driver@f1.com)';
  }

  const phoneRegex = /^[0-9]{10}$/;
  const cleanPhone = (formData.phone || '').replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length !== 10) {
    errors.phone = 'Valid 10-digit mobile number is required';
  }

  if (!formData.college || formData.college.trim().length < 3) {
    errors.college = 'College/Institution name is required';
  }

  // If team event and minTeamSize > 1
  if (event && event.minTeamSize > 1) {
    if (!formData.teamName || formData.teamName.trim().length < 2) {
      errors.teamName = 'Team name is required for this group event';
    }

    if (!formData.teamMembers || formData.teamMembers.length < (event.minTeamSize - 1)) {
      errors.teamMembers = `Please list at least ${event.minTeamSize - 1} additional co-driver/teammate name(s)`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const saveDraftRegistration = (formData) => {
  try {
    localStorage.setItem('zyren27_registration_draft', JSON.stringify(formData));
  } catch (e) {
    // ignore
  }
};

export const loadDraftRegistration = () => {
  try {
    const raw = localStorage.getItem('zyren27_registration_draft');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};

