/**
 * STAFF SUPPORT PORTAL - 4-COLUMN INBOX LOGIC
 * Enterprise Life Insurance Customer Service AI Agent
 * Column 1: Main Category Navigation (Inboxes, Preferences, Staff Card)
 * Column 2: Customer Conversation List (Selected Category Queue)
 * Column 3: Live Chat & Message Composer (AI Proposal, Staff Takeover)
 * Column 4: Details & AI Agent Copilot Swap Panel (Knowledge RAG, Context Summary)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. CUSTOMER DATABASE (LIFE INSURANCE DOMAIN)
  // ==========================================
  const customers = {
    // ⚡ REQUESTS (Hàng đợi AI chuyển giao - Cần Staff tiếp nhận) (Req 5, 7, 9)
    cust_req_01: {
      id: 'cust_req_01',
      name: 'Nguyễn Thảo Ly',
      phone: '0912.845.921',
      cccd: '001201008892',
      company: '#POL-884920',
      policyName: 'Kế hoạch Bảo An Toàn Diện',
      benefit: '500.000 VNĐ/ngày',
      quota: '18.000.000 / 20.000.000 VNĐ',
      beneficiary: 'Nguyễn Văn A (Con ruột - 100%)',
      tier: 'Gold VIP',
      category: 'request',
      ticket: '#TK-7702',
      requestTitle: 'Bồi thường trợ cấp nằm viện 4 ngày',
      summary: 'Khách hàng điều trị viêm phế quản cấp tại BV Quốc tế từ 18/10 đến 22/10. AI Agent đã tóm tắt và khách hàng đã xác nhận hợp lệ tạo Ticket #TK-7702 (2.000.000 VNĐ). Chờ Staff tiếp nhận.',
      email: 'thaoly.nguyen@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#0284c7',
      initials: 'L'
    },
    cust_req_02: {
      id: 'cust_req_02',
      name: 'Trần Quốc Bảo',
      phone: '0918.445.566',
      cccd: '079200004512',
      company: '#POL-552109',
      policyName: 'An Tâm Hưng Thịnh',
      benefit: '350.000 VNĐ/ngày',
      quota: '12.000.000 / 15.000.000 VNĐ',
      beneficiary: 'Trần Bảo Ngọc (Con gái - 100%)',
      tier: 'VIP Diamond',
      category: 'request',
      ticket: '#TK-7705',
      requestTitle: 'Gia hạn đóng phí tự động (APL)',
      summary: 'Khách hàng thắc mắc điều khoản tự động trích phí từ giá trị hoàn lại khi đến kỳ hạn năm thứ 4. AI Agent giải đáp và chuyển chuyên viên tư vấn tiếp nhận.',
      email: 'bao.tran@baolonglog.vn',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#d97706',
      initials: 'B'
    },

    // 💬 RECENT CHATS (Đang phụ trách / Đã tiếp nhận)
    cust_01: {
      id: 'cust_01',
      name: 'Lê Mai Phương',
      phone: '0983.776.655',
      cccd: '001198007761',
      company: '#POL-661244',
      policyName: 'Bảo Gia Vạn Phúc',
      benefit: '1.000.000 VNĐ/ngày (Thẻ VIP)',
      quota: '45.000.000 / 50.000.000 VNĐ',
      beneficiary: 'Lê Minh Khang (Con ruột - 100%)',
      tier: 'Gold VIP',
      category: 'recent',
      ticket: '#TK-7690',
      summary: 'Khách hàng hỏi về giá trị hoàn lại và thủ tục tạm ứng từ giá trị tài khoản hợp đồng năm thứ 3. Staff Suvigya đã tiếp nhận hỗ trợ.',
      email: 'phuong.le@smartdata.vn',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#7c3aed',
      initials: 'P'
    },
    cust_02: {
      id: 'cust_02',
      name: 'Trần Hoàng Nam',
      phone: '0988.123.456',
      cccd: '025201009941',
      company: '#POL-773190',
      policyName: 'An Tâm Song Hành',
      benefit: '400.000 VNĐ/ngày',
      quota: '15.000.000 / 15.000.000 VNĐ',
      beneficiary: 'Nguyễn Thị Hương (Vợ - 100%)',
      tier: 'Standard',
      category: 'recent',
      ticket: '#TK-7685',
      summary: 'Khách hàng hỏi thủ tục bổ sung người thụ hưởng thứ hai cho Hợp đồng An Tâm Song Hành. Đã hướng dẫn nộp đơn bổ sung eKYC.',
      email: 'nam.tran@techcorp.vn',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#16a34a',
      initials: 'N'
    },
    cust_03: {
      id: 'cust_03',
      name: 'Vũ Minh Hằng',
      phone: '0971.332.999',
      cccd: '034201005521',
      company: '#POL-441098',
      policyName: 'Hưu Trí An Nhàn',
      benefit: '300.000 VNĐ/ngày',
      quota: '10.000.000 / 10.000.000 VNĐ',
      beneficiary: 'Vũ Quốc Anh (Em trai - 100%)',
      tier: 'Gold VIP',
      category: 'recent',
      ticket: '#TK-7670',
      summary: 'Khách hàng gửi bổ sung CCCD gắn chip mới để cập nhật hồ sơ khách hàng định danh điện tử eKYC.',
      email: 'hang.vu@alphalog.vn',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#ca8a04',
      initials: 'H'
    },

    // 🟢 NEW CUSTOMERS (Hợp đồng mới phát hành)
    cust_new_01: {
      id: 'cust_new_01',
      name: 'Hoàng Thùy Linh',
      phone: '0909.112.233',
      cccd: '001202003314',
      company: '#POL-992011',
      policyName: 'Bảo An Toàn Diện',
      benefit: '500.000 VNĐ/ngày',
      quota: '20.000.000 / 20.000.000 VNĐ',
      beneficiary: 'Hoàng Văn B (Bố đẻ - 100%)',
      tier: 'Standard',
      category: 'new',
      ticket: '#TK-7710',
      summary: 'Hợp đồng mới phát hành ngày hôm qua. Khách hàng hỏi về thời gian 21 ngày cân nhắc (Free-look period) và cách kích hoạt thẻ bảo lãnh viện phí điện tử.',
      email: 'linh.hoang@vmedia.vn',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#0d9488',
      initials: 'H'
    },
    cust_new_02: {
      id: 'cust_new_02',
      name: 'Đặng Tuấn Minh',
      phone: '0938.889.900',
      cccd: '001200008892',
      company: '#POL-993042',
      policyName: 'Đầu Tư Thịnh Vượng',
      benefit: '600.000 VNĐ/ngày',
      quota: '30.000.000 / 30.000.000 VNĐ',
      beneficiary: 'Đặng Minh Châu (Con gái - 100%)',
      tier: 'Standard',
      category: 'new',
      ticket: '#TK-7711',
      summary: 'Hợp đồng mới được phát hành. Khách hàng hỏi về ngày bắt đầu có hiệu lực đối với quyền lợi tai nạn và bệnh lý nghiêm trọng.',
      email: 'minh.dang@minhtech.vn',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=80',
      avatarBg: '#e11d48',
      initials: 'D'
    }
  };

  // ==========================================
  // 1B. POLICY DATABASE (LIFE INSURANCE REPOSITORY)
  // ==========================================
  const policyDatabase = {
    '#POL-884920': {
      policyId: '#POL-884920',
      customerId: 'cust_req_01',
      ownerName: 'Nguyễn Thảo Ly',
      insuredName: 'Nguyễn Thảo Ly',
      cccd: '001201008892',
      phone: '0912.845.921',
      email: 'thaoly.nguyen@gmail.com',
      planName: 'Kế hoạch Bảo An Toàn Diện',
      status: 'In-Force',
      statusLabel: 'In-Force (Đang hiệu lực)',
      statusClass: 'meta-pill-green',
      issueDate: '15/03/2023',
      effectiveDate: '15/03/2023',
      maturityDate: '15/03/2043 (20 năm)',
      premiumTerm: '15 năm (Đã đóng 2 năm)',
      annualPremium: '24,500,000 VNĐ',
      paymentFrequency: 'Định kỳ năm (Annual)',
      nextDueDate: '15/03/2025',
      sumAssured: '500,000,000 VNĐ',
      benefits: {
        hospitalization: '500,000 VNĐ/ngày (Nằm viện thông thường)',
        icu: '1,000,000 VNĐ/ngày (Khoa Hồi sức tích cực)',
        surgery: 'Chi trả thực tế tối đa 10,000,000 VNĐ/ca',
        criticalIllness: '150,000,000 VNĐ (Giai đoạn đầu & nâng cao)',
        deathOrTPD: '500,000,000 VNĐ (Tử vong hoặc Thương tật toàn bộ vĩnh viễn)',
        annualQuota: '18,000,000 / 20,000,000 VNĐ (Đã dùng 2tr cho Ticket #TK-7702)'
      },
      beneficiary: {
        name: 'Nguyễn Văn A',
        relation: 'Con ruột',
        cccd: '001210009941',
        share: '100%'
      },
      cashValue: '28,500,000 VNĐ',
      loanAvailable: '22,800,000 VNĐ (80% Giá trị hoàn lại)',
      aplStatus: 'Đã kích hoạt APL (Tự động trích nợ phí)',
      activeTickets: [
        { id: '#TK-7702', title: 'Bồi thường trợ cấp nằm viện 4 ngày (Viêm phế quản)', status: 'Pending' }
      ]
    },
    '#POL-552109': {
      policyId: '#POL-552109',
      customerId: 'cust_req_02',
      ownerName: 'Trần Quốc Bảo',
      insuredName: 'Trần Quốc Bảo',
      cccd: '079200004512',
      phone: '0918.445.566',
      email: 'bao.tran@baolonglog.vn',
      planName: 'An Tâm Hưng Thịnh Toàn Diện',
      status: 'Grace Period',
      statusLabel: 'Grace Period (Trong thời gian ân hạn 60 ngày)',
      statusClass: 'meta-pill-blue',
      issueDate: '10/09/2021',
      effectiveDate: '10/09/2021',
      maturityDate: '10/09/2046 (25 năm)',
      premiumTerm: '20 năm (Năm thứ 4)',
      annualPremium: '32,000,000 VNĐ',
      paymentFrequency: 'Định kỳ năm (Annual)',
      nextDueDate: '10/09/2025 (Ân hạn đến 10/11/2025)',
      sumAssured: '750,000,000 VNĐ',
      benefits: {
        hospitalization: '350,000 VNĐ/ngày',
        icu: '700,000 VNĐ/ngày',
        surgery: 'Tối đa 15,000,000 VNĐ/ca',
        criticalIllness: '200,000,000 VNĐ',
        deathOrTPD: '750,000,000 VNĐ',
        annualQuota: '12,000,000 / 15,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Trần Bảo Ngọc',
        relation: 'Con gái',
        cccd: '079308001142',
        share: '100%'
      },
      cashValue: '85,400,000 VNĐ',
      loanAvailable: '68,320,000 VNĐ (80%)',
      aplStatus: 'Đủ điều kiện tự động trích phí APL kỳ năm 4',
      activeTickets: [
        { id: '#TK-7705', title: 'Tư vấn đóng phí tự động APL & Giá trị hoàn lại', status: 'Pending' }
      ]
    },
    '#POL-661244': {
      policyId: '#POL-661244',
      customerId: 'cust_01',
      ownerName: 'Lê Mai Phương',
      insuredName: 'Lê Mai Phương',
      cccd: '001198007761',
      phone: '0983.776.655',
      email: 'phuong.le@smartdata.vn',
      planName: 'Bảo Gia Vạn Phúc (VIP Card)',
      status: 'In-Force',
      statusLabel: 'In-Force (Đang hiệu lực)',
      statusClass: 'meta-pill-green',
      issueDate: '20/01/2022',
      effectiveDate: '20/01/2022',
      maturityDate: '20/01/2042 (20 năm)',
      premiumTerm: '15 năm (Năm thứ 3)',
      annualPremium: '48,000,000 VNĐ',
      paymentFrequency: 'Định kỳ năm',
      nextDueDate: '20/01/2026',
      sumAssured: '1,200,000,000 VNĐ',
      benefits: {
        hospitalization: '1,000,000 VNĐ/ngày (Thẻ bảo lãnh VIP)',
        icu: '2,500,000 VNĐ/ngày',
        surgery: 'Bảo lãnh trực tiếp tối đa 30,000,000 VNĐ',
        criticalIllness: '400,000,000 VNĐ',
        deathOrTPD: '1,200,000,000 VNĐ',
        annualQuota: '45,000,000 / 50,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Lê Minh Khang',
        relation: 'Con ruột',
        cccd: '001215004412',
        share: '100%'
      },
      cashValue: '120,000,000 VNĐ',
      loanAvailable: '96,000,000 VNĐ (80%)',
      aplStatus: 'Active',
      activeTickets: [
        { id: '#TK-7690', title: 'Yêu cầu tạm ứng 80 triệu từ giá trị hoàn lại', status: 'Assigned' }
      ]
    },
    '#POL-773190': {
      policyId: '#POL-773190',
      customerId: 'cust_02',
      ownerName: 'Trần Hoàng Nam',
      insuredName: 'Trần Hoàng Nam',
      cccd: '025201009941',
      phone: '0988.123.456',
      email: 'nam.tran@techcorp.vn',
      planName: 'An Tâm Song Hành',
      status: 'In-Force',
      statusLabel: 'In-Force (Đang hiệu lực)',
      statusClass: 'meta-pill-green',
      issueDate: '05/06/2022',
      effectiveDate: '05/06/2022',
      maturityDate: '05/06/2047 (25 năm)',
      premiumTerm: '20 năm',
      annualPremium: '28,000,000 VNĐ',
      paymentFrequency: 'Định kỳ năm',
      nextDueDate: '05/06/2026',
      sumAssured: '600,000,000 VNĐ',
      benefits: {
        hospitalization: '400,000 VNĐ/ngày',
        icu: '800,000 VNĐ/ngày',
        surgery: 'Tối đa 12,000,000 VNĐ',
        criticalIllness: '180,000,000 VNĐ',
        deathOrTPD: '600,000,000 VNĐ',
        annualQuota: '15,000,000 / 15,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Nguyễn Thị Hương & Trần Minh Khôi',
        relation: 'Vợ (50%) & Con thứ hai (50%)',
        cccd: '025199002231',
        share: 'Đang cập nhật hồ sơ bổ sung'
      },
      cashValue: '42,000,000 VNĐ',
      loanAvailable: '33,600,000 VNĐ (80%)',
      aplStatus: 'Active',
      activeTickets: [
        { id: '#TK-7685', title: 'Bổ sung người thụ hưởng thứ hai (Bé mới sinh)', status: 'Assigned' }
      ]
    },
    '#POL-441098': {
      policyId: '#POL-441098',
      customerId: 'cust_03',
      ownerName: 'Vũ Minh Hằng',
      insuredName: 'Vũ Minh Hằng',
      cccd: '034201005521',
      phone: '0971.332.999',
      email: 'hang.vu@alphalog.vn',
      planName: 'Hưu Trí An Nhàn',
      status: 'Review',
      statusLabel: 'Review (Đang cập nhật định danh eKYC)',
      statusClass: 'meta-pill-gray',
      issueDate: '12/12/2020',
      effectiveDate: '12/12/2020',
      maturityDate: '12/12/2050 (30 năm)',
      premiumTerm: '20 năm',
      annualPremium: '20,000,000 VNĐ',
      paymentFrequency: 'Định kỳ nửa năm (Semi-annual)',
      nextDueDate: '12/06/2026',
      sumAssured: '450,000,000 VNĐ',
      benefits: {
        hospitalization: '300,000 VNĐ/ngày',
        icu: '600,000 VNĐ/ngày',
        surgery: 'Tối đa 8,000,000 VNĐ',
        criticalIllness: '120,000,000 VNĐ',
        deathOrTPD: '450,000,000 VNĐ',
        annualQuota: '10,000,000 / 10,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Vũ Quốc Anh',
        relation: 'Em trai',
        cccd: '034205001123',
        share: '100%'
      },
      cashValue: '55,000,000 VNĐ',
      loanAvailable: '44,000,000 VNĐ (80%)',
      aplStatus: 'Active',
      activeTickets: [
        { id: '#TK-7670', title: 'Cập nhật số CCCD gắn chip mới qua eKYC', status: 'Resolved' }
      ]
    },
    '#POL-992011': {
      policyId: '#POL-992011',
      customerId: 'cust_new_01',
      ownerName: 'Hoàng Thùy Linh',
      insuredName: 'Hoàng Thùy Linh',
      cccd: '001202003314',
      phone: '0909.112.233',
      email: 'linh.hoang@vmedia.vn',
      planName: 'Bảo An Toàn Diện (Mới phát hành)',
      status: 'In-Force',
      statusLabel: 'In-Force (21 ngày cân nhắc Free-look)',
      statusClass: 'meta-pill-green',
      issueDate: '26/10/2026',
      effectiveDate: '26/10/2026',
      maturityDate: '26/10/2046 (20 năm)',
      premiumTerm: '15 năm (Năm 1)',
      annualPremium: '22,000,000 VNĐ',
      paymentFrequency: 'Định kỳ năm',
      nextDueDate: '26/10/2027',
      sumAssured: '500,000,000 VNĐ',
      benefits: {
        hospitalization: '500,000 VNĐ/ngày',
        icu: '1,000,000 VNĐ/ngày',
        surgery: 'Tối đa 10,000,000 VNĐ',
        criticalIllness: '150,000,000 VNĐ (Chờ 90 ngày)',
        deathOrTPD: '500,000,000 VNĐ',
        annualQuota: '20,000,000 / 20,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Hoàng Văn B',
        relation: 'Bố đẻ',
        cccd: '001065001199',
        share: '100%'
      },
      cashValue: '0 VNĐ (Năm đầu tiên)',
      loanAvailable: '0 VNĐ',
      aplStatus: 'Chưa khả dụng',
      activeTickets: [
        { id: '#TK-7710', title: 'Hướng dẫn 21 ngày cân nhắc & Thẻ bảo hiểm số', status: 'New' }
      ]
    },
    '#POL-993042': {
      policyId: '#POL-993042',
      customerId: 'cust_new_02',
      ownerName: 'Đặng Tuấn Minh',
      insuredName: 'Đặng Tuấn Minh',
      cccd: '001200008892',
      phone: '0938.889.900',
      email: 'minh.dang@minhtech.vn',
      planName: 'Đầu Tư Thịnh Vượng (Universal Life)',
      status: 'In-Force',
      statusLabel: 'In-Force (Mới phát hành)',
      statusClass: 'meta-pill-green',
      issueDate: '25/10/2026',
      effectiveDate: '25/10/2026',
      maturityDate: '25/10/2056 (30 năm)',
      premiumTerm: '20 năm',
      annualPremium: '36,000,000 VNĐ',
      paymentFrequency: 'Định kỳ năm',
      nextDueDate: '25/10/2027',
      sumAssured: '1,000,000,000 VNĐ',
      benefits: {
        hospitalization: '600,000 VNĐ/ngày',
        icu: '1,200,000 VNĐ/ngày',
        surgery: 'Tối đa 15,000,000 VNĐ',
        criticalIllness: '300,000,000 VNĐ (Chờ 90 ngày)',
        deathOrTPD: '1,000,000,000 VNĐ',
        annualQuota: '30,000,000 / 30,000,000 VNĐ'
      },
      beneficiary: {
        name: 'Đặng Minh Châu',
        relation: 'Con gái',
        cccd: '001318002231',
        share: '100%'
      },
      cashValue: '0 VNĐ',
      loanAvailable: '0 VNĐ',
      aplStatus: 'Chưa khả dụng',
      activeTickets: [
        { id: '#TK-7711', title: 'Tư vấn thời gian chờ quyền lợi bệnh hiểm nghèo', status: 'New' }
      ]
    }
  };

  // ==========================================
  // 2. CONVERSATION HISTORIES (Req 3, 4, 5, 7)
  // ==========================================
  const customerMessages = {
    cust_req_01: [
      {
        sender: 'customer',
        text: 'Chào em, chị vừa xuất viện sau 4 ngày điều trị viêm phế quản cấp tại BV Đa khoa Quốc tế. Chị gửi kèm Giấy ra viện và Bảng kê viện phí, nhờ AI kiểm tra quyền lợi trợ cấp nằm viện giúp chị nhé!'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào chị Thảo Ly! AI Agent đã tra cứu HĐBH <strong>#POL-884920</strong> (Kế hoạch Bảo An Toàn Diện):<br>
• Quyền lợi trợ cấp nằm viện: <strong>500.000 VNĐ/ngày</strong>.<br>
• Thời gian nằm viện: 4 ngày (18/10 - 22/10).<br>
• Hợp đồng đã qua thời gian chờ 30 ngày (Hiệu lực từ 15/03/2023).<br>
• Hồ sơ chứng từ đính kèm: Hợp lệ theo quy định.<br>
<div class="ticket-proposal-card">
  <div class="proposal-header">
    <span class="proposal-title">📋 Đề xuất Ticket: Bồi thường quyền lợi nằm viện</span>
    <span class="proposal-badge">#TK-7702</span>
  </div>
  <div class="proposal-details">
    <div class="proposal-item"><span class="label">HĐBH:</span><span class="val">#POL-884920 (Bảo An Toàn Diện)</span></div>
    <div class="proposal-item"><span class="label">Số ngày nằm viện:</span><span class="val">4 ngày (Viêm phế quản cấp)</span></div>
    <div class="proposal-item"><span class="label">Mức trợ cấp đề xuất:</span><span class="val">2.000.000 VNĐ</span></div>
    <div class="proposal-item"><span class="label">Tài khoản thụ hưởng:</span><span class="val">Techcombank - 1903****889</span></div>
  </div>
  <div class="proposal-confirmed-banner">
    <span class="check-icon">✓</span> Khách hàng đã bấm xác nhận hợp lệ lúc 14:32:10 — Core Backend đã tạo Ticket #TK-7702
  </div>
</div>`
      },
      {
        sender: 'staff',
        text: 'Chào chị Ly, em là Suvigya chuyên viên CSKH phụ trách ca của chị. Em đã tiếp nhận Ticket #TK-7702 và kiểm tra toàn bộ giấy ra viện, hồ sơ đã đầy đủ hợp lệ theo quy tắc sản phẩm rồi ạ!'
      },
      {
        sender: 'customer',
        text: 'Cảm ơn em nhiều nhé, hỗ trợ rất nhanh và chu đáo!'
      }
    ],

    cust_req_02: [
      {
        sender: 'customer',
        text: 'Hợp đồng #POL-552109 của tôi sắp đến kỳ đóng phí năm thứ 4. Nếu tôi đóng trễ vài tuần thì điều khoản gia hạn tự động APL có tự trích tiền trong giá trị hoàn lại không?'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào anh Bảo! Theo Điều khoản HĐBH <strong>#POL-552109</strong> (An Tâm Hưng Thịnh):<br>
• Sau 60 ngày ân hạn đóng phí, hệ thống sẽ tự động kích hoạt tính năng Tự động đóng phí tự động (APL) nếu Giá trị hoàn lại lớn hơn khoản phí định kỳ.<br>
• AI Agent đã tạo yêu cầu kết nối chuyên viên CSKH để hỗ trợ anh xác nhận số dư tài khoản hợp đồng.`
      }
    ],

    cust_01: [
      {
        sender: 'customer',
        text: 'Chào em, chị muốn hỏi nếu chị cần tạm ứng tiền từ giá trị tài khoản HĐ #POL-661244 thì hạn mức tối đa được rút là bao nhiêu %?'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào chị Phương! Theo quy tắc sản phẩm <strong>Bảo Gia Vạn Phúc</strong>, hạn mức tạm ứng tối đa là <strong>80% Giá trị hoàn lại</strong> của hợp đồng tại thời điểm yêu cầu.`
      },
      {
        sender: 'staff',
        text: 'Chào chị Phương, em là Suvigya. Hiện giá trị hoàn lại HĐ của chị là 120.000.000đ, hạn mức tạm ứng tối đa là 96.000.000đ ạ. Chị có cần em gửi link nộp yêu cầu trực tuyến không ạ?'
      }
    ],

    cust_02: [
      {
        sender: 'customer',
        text: 'Chào bạn, mình vừa có thêm bé thứ hai, muốn thêm bé vào danh sách người thụ hưởng hợp đồng #POL-773190 cùng với vợ thì cần thủ tục gì?'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào anh Nam! Thủ tục bổ sung người thụ hưởng bao gồm: Giấy khai sinh của bé + Phiếu yêu cầu thay đổi thông tin hợp đồng. AI Agent đã chuyển Suvigya hỗ trợ anh gửi biểu mẫu điện tử.`
      },
      {
        sender: 'staff',
        text: 'Chào anh Nam, em đã chuẩn bị sẵn biểu mẫu điện tử thay đổi người thụ hưởng, anh chỉ cần ký online qua ứng dụng Customer Portal trong 2 phút là xong ạ!'
      }
    ],

    cust_03: [
      {
        sender: 'customer',
        text: 'Mình vừa đổi sang thẻ Căn cước công dân gắn chip mới, mình gửi ảnh chụp 2 mặt nhờ cập nhật lại hồ sơ HĐBH #POL-441098 giúp mình nhé.'
      },
      {
        sender: 'staff',
        text: 'Chào chị Hằng, em đã tiếp nhận ảnh CCCD của chị và đã cập nhật thành công lên Cổng thông tin bảo hiểm định danh eKYC rồi ạ!'
      }
    ],

    cust_new_01: [
      {
        sender: 'customer',
        text: 'Chào bạn, hợp đồng #POL-992011 của mình vừa được phát hành hôm qua. Cho mình hỏi thời gian 21 ngày cân nhắc tính từ lúc nào và làm sao kích hoạt thẻ bảo lãnh viện phí?'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào chị Linh! Chúc mừng chị đã tham gia Kế hoạch Bảo An Toàn Diện! Thời gian 21 ngày cân nhắc tính từ ngày chị nhận được Bộ hợp đồng bảo hiểm điện tử qua email. Thẻ bảo hiểm điện tử đã sẵn sàng trên ứng dụng Customer Portal.`
      }
    ],

    cust_new_02: [
      {
        sender: 'customer',
        text: 'Chào em, hợp đồng #POL-993042 của anh vừa có hiệu lực. Cho anh hỏi quyền lợi tai nạn và bệnh lý nghiêm trọng có thời gian chờ không?'
      },
      {
        sender: 'bot',
        isHtml: true,
        text: `Chào anh Minh! Quyền lợi bảo hiểm tai nạn có hiệu lực ngay khi hợp đồng được phát hành. Quyền lợi bệnh hiểm nghèo có thời gian chờ là 90 ngày kể từ ngày hợp đồng có hiệu lực.`
      }
    ]
  };

  // ==========================================
  // 3. AI AGENT SESSIONS & KNOWLEDGE (Req 8)
  // ==========================================
  const agentSessions = {
    cust_req_01: {
      chips: [
        { label: '✨ Tra cứu quyền lợi HĐ #POL-884920', prompt: 'Tra cứu quyền lợi trợ cấp nằm viện và phẫu thuật của HĐ #POL-884920.' },
        { label: '📑 Kiểm tra thời gian chờ viện phí (30 ngày)', prompt: 'Kiểm tra quy định thời gian chờ 30 ngày cho quyền lợi nằm viện bệnh thông thường.' },
        { label: '📋 Danh mục chứng từ chi trả viện phí', prompt: 'Danh mục chứng từ cần thiết để giải quyết quyền lợi trợ cấp nằm viện?' },
        { label: '🛡️ Quy định điều khoản loại trừ', prompt: 'Điều khoản loại trừ trợ cấp nằm viện đối với bệnh có sẵn hoặc khám sức khỏe định kỳ?' }
      ],
      messages: [
        { sender: 'agent', text: 'Xin chào Suvigya! Tôi là <strong>AI Agent Copilot</strong>. Tôi đã tóm tắt hồ sơ bồi thường viện phí của <strong>Nguyễn Thảo Ly</strong> (HĐ #POL-884920): Khách nằm viện 4 ngày viêm phế quản cấp, đã xác nhận tạo Ticket #TK-7702 (2.000.000 VNĐ). Mọi chứng từ đã đầy đủ hợp lệ theo quy tắc sản phẩm.' }
      ]
    },
    cust_req_02: {
      chips: [
        { label: '⚡ Điều khoản đóng phí tự động APL', prompt: 'Quy định trích phí tự động APL từ giá trị hoàn lại của HĐ #POL-552109.' },
        { label: '⏳ Thời gian ân hạn đóng phí (60 ngày)', prompt: 'Quy định thời gian ân hạn đóng phí 60 ngày và cách tính lãi.' }
      ],
      messages: [
        { sender: 'agent', text: 'Khách hàng <strong>Trần Quốc Bảo</strong> hỏi về tính năng gia hạn tự động APL cho HĐ #POL-552109. Giá trị hoàn lại hiện tại đủ điều kiện tự động đóng phí năm 4.' }
      ]
    },
    cust_01: {
      chips: [
        { label: '📈 Quy định tạm ứng Giá trị hoàn lại', prompt: 'Hạn mức tối đa và lãi suất tạm ứng từ giá trị hoàn lại HĐ Bảo Gia Vạn Phúc.' }
      ],
      messages: [
        { sender: 'agent', text: 'Hợp đồng <strong>#POL-661244</strong> của chị Lê Mai Phương có giá trị hoàn lại 120.000.000đ, hạn mức tạm ứng 80% tương đương 96.000.000đ.' }
      ]
    },
    cust_02: {
      chips: [
        { label: '📝 Thủ tục đổi Người thụ hưởng', prompt: 'Hồ sơ pháp lý cần thiết để bổ sung người thụ hưởng thứ hai cho HĐBH.' }
      ],
      messages: [
        { sender: 'agent', text: 'Khách hàng <strong>Trần Hoàng Nam</strong> muốn bổ sung con gái thứ hai vào danh sách thụ hưởng. Có thể thực hiện e-Sign qua Portal.' }
      ]
    },
    cust_03: {
      chips: [
        { label: '🆔 Quy trình định danh eKYC', prompt: 'Thời gian đối soát và cập nhật CCCD gắn chip mới lên hệ thống Core Bảo hiểm.' }
      ],
      messages: [
        { sender: 'agent', text: 'Chị <strong>Vũ Minh Hằng</strong> đã gửi 2 mặt CCCD mới, hồ sơ đã đồng bộ xong với Cổng Dịch vụ công quốc gia.' }
      ]
    },
    cust_new_01: {
      chips: [
        { label: '🔍 21 ngày cân nhắc (Free-look period)', prompt: 'Quy định quyền lợi trong 21 ngày cân nhắc tham gia bảo hiểm nhân thọ.' },
        { label: '💳 Kích hoạt thẻ bảo lãnh viện phí', prompt: 'Hướng dẫn khách hàng xuất trình thẻ bảo lãnh viện phí điện tử tại bệnh viện liên kết.' }
      ],
      messages: [
        { sender: 'agent', text: 'Khách hàng mới <strong>Hoàng Thùy Linh</strong> vừa phát hành HĐ #POL-992011, cần hỗ trợ hướng dẫn 21 ngày cân nhắc và thẻ bảo lãnh viện phí.' }
      ]
    },
    cust_new_02: {
      chips: [
        { label: '⏳ Thời gian chờ các bệnh hiểm nghèo', prompt: 'Danh mục 88 bệnh hiểm nghèo và thời gian chờ 90 ngày.' }
      ],
      messages: [
        { sender: 'agent', text: 'Anh <strong>Đặng Tuấn Minh</strong> hỏi về thời gian chờ quyền lợi bệnh hiểm nghèo (90 ngày) và tai nạn (hiệu lực ngay).' }
      ]
    }
  };

  // ==========================================
  // 4. STATE VARIABLES
  // ==========================================
  let currentCategory = 'request'; // Mặc định mở hàng đợi Yêu cầu cần tiếp nhận (Req 7 & 9)
  let currentCustomerId = 'cust_req_01'; // Khách hàng Nguyễn Thảo Ly (có AI Ticket Proposal - Req 5)
  let isTakeover = true;
  let rightPanelMode = 'details'; // 'details' | 'agent' | 'lookup'
  let activeViewMode = 'chat'; // 'chat' | 'policy-explorer'
  let selectedPolicyId = '#POL-884920';
  let fullLookupStatusFilter = 'all';

  // ==========================================
  // 5. DOM ELEMENTS
  // ==========================================
  const sidebar = document.getElementById('sidebar');
  const toggleSidebarBtn = document.getElementById('toggle-sidebar');
  const col2SectionTitle = document.getElementById('col2-section-title');
  const col2FilterText = document.getElementById('col2-filter-text');
  const col2CustomerList = document.getElementById('col2-customer-list');
  const sidebarCustSearch = document.getElementById('sidebar-cust-search');
  const globalSearch = document.getElementById('global-search');

  // Workspace Panes & Full Policy Explorer
  const workspacePanes = document.getElementById('workspace-panes');
  const fullPolicyLookupView = document.getElementById('full-policy-lookup-view');
  const navItemPolicyLookup = document.getElementById('nav-item-policy-lookup');
  const btnReturnInbox = document.getElementById('btn-return-inbox');

  // Column 3 Elements
  const chatHeaderName = document.getElementById('chat-header-cust-name');
  const chatHeaderAvatar = document.getElementById('chat-header-avatar');
  const chatFlow = document.getElementById('chat-flow');
  const chatFlowInner = document.getElementById('chat-flow-inner');
  const chatMessageInput = document.getElementById('chat-message-input');
  const btnSendChat = document.getElementById('btn-send-chat');
  const btnTakeover = document.getElementById('btn-takeover');
  const btnMacroPopup = document.getElementById('btn-macro-popup');
  const btnToggleAgent = document.getElementById('btn-toggle-agent');
  const btnToggleDetails = document.getElementById('btn-toggle-details');

  // Vertical Rail Buttons
  const railBtnDetails = document.getElementById('rail-btn-details');
  const railBtnAgent = document.getElementById('rail-btn-agent');
  const railBtnLookup = document.getElementById('rail-btn-lookup');

  // Column 4 Elements
  const rightPanelCol = document.getElementById('right-panel-col');
  const viewDetails = document.getElementById('view-details');
  const viewAgent = document.getElementById('view-agent');
  const viewLookup = document.getElementById('view-lookup');
  const btnCloseDetails = document.getElementById('btn-close-details');
  const btnCloseAgent = document.getElementById('btn-close-agent');
  const btnCloseLookup = document.getElementById('btn-close-lookup');
  const sidecarAgentTitle = document.getElementById('sidecar-agent-title');
  const sidecarChipsWrap = document.getElementById('sidecar-chips-wrap');
  const sidecarChatStream = document.getElementById('sidecar-chat-stream');
  const sidecarAgentInput = document.getElementById('sidecar-agent-input');
  const btnSidecarSend = document.getElementById('btn-sidecar-send');

  // Side Quick Lookup Elements (View C)
  const sideLookupInput = document.getElementById('side-lookup-input');
  const sideLookupCurrentContent = document.getElementById('side-lookup-current-content');
  const btnSideOpenFullCurrent = document.getElementById('btn-side-open-full-current');
  const sideLookupResultsList = document.getElementById('side-lookup-results-list');
  const sideLookupCount = document.getElementById('side-lookup-count');

  // Full-Screen Policy Explorer Elements
  const fullPolicySearchInput = document.getElementById('full-policy-search-input');
  const fullPolicyCardList = document.getElementById('full-policy-card-list');
  const fullLookupDossierPane = document.getElementById('full-lookup-dossier-pane');

  // Counts (Req 9)
  const countNewCustomers = document.getElementById('count-new-customers');
  const countRequests = document.getElementById('count-requests');
  const countRecents = document.getElementById('count-recents');
  const navTicketsBadge = document.getElementById('nav-tickets-badge');

  // Toast & Font Select (Giữ lại theo yêu cầu)
  const toast = document.getElementById('toast');
  const fontSelect = document.getElementById('font-family-select');

  // ==========================================
  // 6. HELPER UTILS
  // ==========================================
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  // ==========================================
  // 7. COLUMN 1 & QUEUE MANAGEMENT (Req 7 & 9)
  // ==========================================
  const categoryTitles = {
    all: 'All Conversations',
    request: 'Requests',
    recent: 'Active Conversations',
    new: 'New Policies',
    tickets: 'Tickets'
  };

  function selectCategory(cat) {
    currentCategory = cat;

    // Update active state in Column 1
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
    });

    // Update Column 2 Header Title
    if (col2SectionTitle) {
      col2SectionTitle.textContent = categoryTitles[cat] || 'Danh sách hội thoại';
    }

    // Render Column 2 list
    renderCustomerListColumn(cat, sidebarCustSearch ? sidebarCustSearch.value : '');

    // Select the first customer in this category
    const available = getCustomersByCategory(cat);
    if (available.length > 0) {
      if (!available.some(c => c.id === currentCustomerId)) {
        activateCustomer(available[0].id);
      } else {
        activateCustomer(currentCustomerId);
      }
    }
  }

  function getCustomersByCategory(cat) {
    return Object.values(customers).filter(c => {
      if (c.category === 'dismissed') return false;
      if (cat === 'all') return true;
      if (cat === 'tickets') return true;
      return c.category === cat;
    });
  }

  function updateCategoryBadges() {
    const newCount = Object.values(customers).filter(c => c.category === 'new').length;
    const reqCount = Object.values(customers).filter(c => c.category === 'request').length;
    const recentCount = Object.values(customers).filter(c => c.category === 'recent').length;

    if (countNewCustomers) countNewCustomers.textContent = newCount;
    if (countRequests) countRequests.textContent = reqCount;
    if (countRecents) countRecents.textContent = recentCount;
    if (navTicketsBadge) navTicketsBadge.textContent = '2';
  }

  // ==========================================
  // 8. COLUMN 2: RENDER CUSTOMER CARDS (Req 7)
  // ==========================================
  function renderCustomerListColumn(cat, query = '') {
    if (!col2CustomerList) return;
    const q = query.trim().toLowerCase();

    const list = getCustomersByCategory(cat).filter(c => {
      if (!q) return true;
      return c.name.toLowerCase().includes(q) ||
             (c.phone && c.phone.includes(q)) ||
             (c.company && c.company.toLowerCase().includes(q)) ||
             (c.summary && c.summary.toLowerCase().includes(q));
    });

    if (col2FilterText) {
      col2FilterText.textContent = `${list.length} Open Cases`;
    }

    col2CustomerList.innerHTML = '';

    if (list.length === 0) {
      col2CustomerList.innerHTML = `<div class="empty-cards-notice">Không có hội thoại nào trong hàng đợi này</div>`;
      return;
    }

    list.forEach(c => {
      const card = document.createElement('div');
      card.className = `customer-card-item ${c.id === currentCustomerId ? 'active' : ''}`;
      card.setAttribute('data-cust-id', c.id);

      // Latest message snippet
      const msgs = customerMessages[c.id] || [];
      const lastMsg = msgs.length > 0 ? (msgs[msgs.length - 1].sender === 'customer' ? msgs[msgs.length - 1].text : msgs[msgs.length - 1].text.replace(/<[^>]*>?/gm, '')) : (c.requestTitle || c.summary);

      // Card Action Buttons (Accept ✓ / Dismiss ✕ for Requests)
      let actionButtons = '';
      if (c.category === 'request') {
        actionButtons = `
          <div class="card-actions-row">
            <button class="btn-card-action btn-card-accept" data-action="accept" data-cust-id="${c.id}" title="Accept this support case">✓ Accept</button>
            <button class="btn-card-action btn-card-reject" data-action="reject" data-cust-id="${c.id}" title="Reassign / dismiss">✕ Dismiss</button>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="card-avatar-wrap" style="background-color: ${c.avatarBg || '#0284c7'};">
          ${c.avatar ? `<img src="${c.avatar}" alt="${escapeHTML(c.name)}" class="card-avatar-img">` : c.initials}
        </div>
        <div class="card-content-wrap">
          <div class="card-top-row">
            <span class="card-cust-name">${escapeHTML(c.name)}</span>
            <span class="card-time-badge">${c.category === 'new' ? 'Just now' : '3m ago'}</span>
          </div>
          <div style="font-size: 10.5px; color: #64748b; font-weight: 600;">Policy: ${c.company}</div>
          <p class="card-snippet-text">${escapeHTML(lastMsg)}</p>
          ${actionButtons}
        </div>
      `;

      // Click card to activate customer
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-card-action')) return;
        activateCustomer(c.id);
      });

      // Accept Request (✓ Nhận ca - Req 7)
      const btnAccept = card.querySelector('.btn-card-accept');
      if (btnAccept) {
        btnAccept.addEventListener('click', (e) => {
          e.stopPropagation();
          c.category = 'recent';
          updateCategoryBadges();
          renderCustomerListColumn(currentCategory, sidebarCustSearch ? sidebarCustSearch.value : '');
          activateCustomer(c.id);
          if (btnTakeover && !isTakeover) {
            btnTakeover.click();
          }
          showToast(`✅ Đã tiếp nhận Ticket: ${c.name} (${c.ticket})`);
        });
      }

      // Reject Request (✕ Bỏ qua)
      const btnReject = card.querySelector('.btn-card-reject');
      if (btnReject) {
        btnReject.addEventListener('click', (e) => {
          e.stopPropagation();
          c.category = 'dismissed';
          updateCategoryBadges();
          renderCustomerListColumn(currentCategory, sidebarCustSearch ? sidebarCustSearch.value : '');
          showToast(`Đã chuyển quyền điều phối ca của: ${c.name}`);
        });
      }

      col2CustomerList.appendChild(card);
    });
  }

  // ==========================================
  // 9. ACTIVATE CUSTOMER (Column 3 & 4 Update - Req 7)
  // ==========================================
  function activateCustomer(custId) {
    if (!customers[custId]) return;
    currentCustomerId = custId;
    const cust = customers[custId];

    // Highlight active card in Column 2
    document.querySelectorAll('.customer-card-item').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-cust-id') === custId);
    });

    // Update Column 3 Header (Name and Ticket Pill only)
    if (chatHeaderName) chatHeaderName.textContent = cust.name;
    if (chatHeaderAvatar && cust.avatar) chatHeaderAvatar.src = cust.avatar;

    const summaryCustTicket = document.getElementById('summary-cust-ticket');
    if (summaryCustTicket) summaryCustTicket.textContent = cust.ticket;

    // Render Messages in Column 3 (Includes AI Ticket Proposal Card - Req 5)
    renderCustomerChat(custId);

    // Update Details in Column 4 (Req 7)
    updateCustomerDetails(cust);

    // Update Agent Copilot in Column 4 (Req 8)
    renderAgentCopilot(custId);

    // Update Side Quick Lookup (View C)
    renderSideQuickLookup(sideLookupInput ? sideLookupInput.value : '');
  }

  // ==========================================
  // 10. COLUMN 3: CHAT STREAM & COMPOSER (Req 3, 4, 5, 7)
  // ==========================================
  function renderCustomerChat(custId) {
    if (!chatFlowInner) return;
    const cust = customers[custId];
    const msgs = customerMessages[custId] || [];

    chatFlowInner.innerHTML = '';

    msgs.forEach(msg => {
      const row = document.createElement('div');

      if (msg.sender === 'customer') {
        row.className = 'chat-row row-customer';
        row.innerHTML = `
          <div class="chat-avatar-frame">
            <img src="${cust.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80'}" alt="Customer" class="chat-avatar-img">
          </div>
          <div class="chat-box-bubble bubble-customer">
            ${escapeHTML(msg.text)}
          </div>
        `;
      } else if (msg.sender === 'bot') {
        row.className = 'chat-row row-bot';
        row.innerHTML = `
          <div class="chat-avatar-frame">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=80&auto=format&fit=crop&q=80" alt="Customer AI Agent" class="chat-avatar-img">
          </div>
          <div class="chat-box-bubble bubble-bot">
            ${msg.isHtml ? msg.text : escapeHTML(msg.text)}
          </div>
        `;
      } else if (msg.sender === 'staff') {
        row.className = 'chat-row row-staff';
        row.innerHTML = `
          <div class="chat-avatar-frame">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80" alt="Staff" class="chat-avatar-img">
          </div>
          <div class="chat-box-bubble bubble-staff">
            ${escapeHTML(msg.text)}
          </div>
        `;
      }

      chatFlowInner.appendChild(row);
    });

    if (chatFlow) {
      chatFlow.scrollTop = chatFlow.scrollHeight;
    }
  }

  function sendMessage() {
    if (!chatMessageInput) return;
    const text = chatMessageInput.value.trim();
    if (!text) return;

    if (!customerMessages[currentCustomerId]) {
      customerMessages[currentCustomerId] = [];
    }

    // Append staff message (Req 7 Staff Takeover Chat)
    customerMessages[currentCustomerId].push({ sender: 'staff', text });
    chatMessageInput.value = '';

    // Auto-promote 'new' customer to 'recent'
    const cust = customers[currentCustomerId];
    if (cust && cust.category === 'new') {
      cust.category = 'recent';
      updateCategoryBadges();
      showToast(`Đã phản hồi và chuyển ${cust.name} sang Hội thoại đang phụ trách.`);
    }

    renderCustomerChat(currentCustomerId);
    renderCustomerListColumn(currentCategory, sidebarCustSearch ? sidebarCustSearch.value : '');

    // Simulate customer auto-reply
    setTimeout(() => {
      if (customerMessages[currentCustomerId]) {
        customerMessages[currentCustomerId].push({
          sender: 'customer',
          text: 'Vâng em cảm ơn chuyên viên đã kiểm tra và hỗ trợ giải quyết rất nhanh ạ!'
        });
        renderCustomerChat(currentCustomerId);
        renderCustomerListColumn(currentCategory, sidebarCustSearch ? sidebarCustSearch.value : '');
      }
    }, 1200);
  }

  // ==========================================
  // 11. COLUMN 4: DETAILS, COPILOT & LOOKUP SWAP PANEL (Req 7, 8, & Policy Lookup)
  // ==========================================
  function switchRightPanel(mode) {
    rightPanelMode = mode;

    // Update Vertical Sub-Rail Button States
    if (railBtnDetails) railBtnDetails.classList.toggle('active', mode === 'details');
    if (railBtnAgent) railBtnAgent.classList.toggle('active', mode === 'agent');
    if (railBtnLookup) railBtnLookup.classList.toggle('active', mode === 'lookup');

    // Update Panel Views
    if (viewDetails) viewDetails.classList.toggle('active', mode === 'details');
    if (viewAgent) viewAgent.classList.toggle('active', mode === 'agent');
    if (viewLookup) viewLookup.classList.toggle('active', mode === 'lookup');

    // Ensure Right Panel is expanded
    if (rightPanelCol) {
      rightPanelCol.classList.remove('collapsed');
      updateTogglePanelButtonState(false);
    }

    // Mode-specific initializations
    if (mode === 'agent') {
      renderAgentCopilot(currentCustomerId);
      if (sidecarAgentInput) {
        setTimeout(() => sidecarAgentInput.focus(), 120);
      }
    } else if (mode === 'lookup') {
      renderSideQuickLookup(sideLookupInput ? sideLookupInput.value : '');
      if (sideLookupInput) {
        setTimeout(() => sideLookupInput.focus(), 120);
      }
    }
  }

  function updateTogglePanelButtonState(isCollapsed) {
    if (!btnToggleDetails) return;
    btnToggleDetails.classList.toggle('panel-is-collapsed', isCollapsed);
    const label = document.getElementById('rail-toggle-label');
    if (label) {
      label.textContent = isCollapsed ? 'Show' : 'Hide';
    }
    btnToggleDetails.title = isCollapsed ? 'Expand Details Panel' : 'Collapse Details Panel';
  }

  function updateCustomerDetails(cust) {
    // 1. Case Status & Tier
    const detailsCaseStatus = document.getElementById('details-case-status');
    if (detailsCaseStatus) {
      if (cust.category === 'request') {
        detailsCaseStatus.textContent = 'Pending';
        detailsCaseStatus.className = 'meta-pill-blue';
      } else {
        detailsCaseStatus.textContent = 'Active';
        detailsCaseStatus.className = 'meta-pill-green';
      }
    }

    const detailsCaseTier = document.getElementById('details-case-tier');
    if (detailsCaseTier) {
      detailsCaseTier.textContent = cust.tier || 'Gold VIP';
    }

    // 2. Customer Profile
    const summaryCustName = document.getElementById('summary-cust-name');
    if (summaryCustName) summaryCustName.textContent = cust.name;

    const summaryCustPhone = document.getElementById('summary-cust-phone');
    if (summaryCustPhone) summaryCustPhone.textContent = cust.phone;

    const profEmail = document.getElementById('prof-email');
    if (profEmail) profEmail.textContent = cust.email;

    const profCccd = document.getElementById('prof-cccd');
    if (profCccd) profCccd.textContent = cust.cccd || '001201008892';

    // 3. Insurance Policy
    const profCompany = document.getElementById('prof-company');
    if (profCompany) profCompany.textContent = cust.company;

    const profPolicyName = document.getElementById('prof-policy-name');
    if (profPolicyName) profPolicyName.textContent = cust.policyName || 'Kế hoạch Bảo An Toàn Diện';

    const profBenefit = document.getElementById('prof-benefit');
    if (profBenefit) profBenefit.textContent = cust.benefit || '500.000 VNĐ/ngày';

    const profQuota = document.getElementById('prof-quota');
    if (profQuota) profQuota.textContent = cust.quota || '18.000.000 / 20.000.000 VNĐ';

    const profBeneficiary = document.getElementById('prof-beneficiary');
    if (profBeneficiary) profBeneficiary.textContent = cust.beneficiary || 'Nguyễn Văn A (Con ruột - 100%)';

    // 4. AI Context Summary
    const summaryAiText = document.getElementById('summary-ai-text');
    if (summaryAiText) summaryAiText.textContent = cust.summary;
  }

  function renderAgentCopilot(custId) {
    const cust = customers[custId];
    if (!cust) return;

    if (sidecarAgentTitle) {
      sidecarAgentTitle.textContent = `AI Copilot • ${cust.name}`;
    }

    const session = agentSessions[custId] || {
      chips: [
        { label: `✨ Tra cứu HĐ ${cust.company}`, prompt: `Tra cứu điều khoản và quyền lợi của HĐ ${cust.company}` },
        { label: '📑 Thời gian chờ nằm viện', prompt: 'Quy định thời gian chờ quyền lợi nằm viện bệnh thông thường?' }
      ],
      messages: [
        { sender: 'agent', text: `Tôi đang theo dõi trường hợp của khách hàng <strong>${cust.name}</strong> (HĐ ${cust.company}). Bạn cần tôi tra cứu điều khoản hay tóm tắt thêm điểm nào không?` }
      ]
    };

    // Render Action Chips (Req 8)
    if (sidecarChipsWrap) {
      sidecarChipsWrap.innerHTML = '';
      session.chips.forEach(chip => {
        const btn = document.createElement('button');
        btn.className = 'agent-chip';
        btn.textContent = chip.label;
        btn.addEventListener('click', () => {
          sendPromptToAgent(chip.prompt);
        });
        sidecarChipsWrap.appendChild(btn);
      });
    }

    // Render Copilot Messages (Req 8)
    if (sidecarChatStream) {
      sidecarChatStream.innerHTML = '';
      session.messages.forEach(msg => {
        const bubble = document.createElement('div');
        if (msg.sender === 'user') {
          bubble.className = 'sidecar-bubble-user';
          bubble.innerHTML = escapeHTML(msg.text);
        } else {
          bubble.className = 'sidecar-bubble-agent';
          bubble.innerHTML = msg.text;
        }
        sidecarChatStream.appendChild(bubble);
      });
      sidecarChatStream.scrollTop = sidecarChatStream.scrollHeight;
    }
  }

  function sendPromptToAgent(promptText) {
    const text = promptText || (sidecarAgentInput ? sidecarAgentInput.value.trim() : '');
    if (!text) return;

    if (!agentSessions[currentCustomerId]) {
      agentSessions[currentCustomerId] = { chips: [], messages: [] };
    }
    const session = agentSessions[currentCustomerId];

    session.messages.push({ sender: 'user', text });
    if (sidecarAgentInput) sidecarAgentInput.value = '';
    renderAgentCopilot(currentCustomerId);

    setTimeout(() => {
      const cust = customers[currentCustomerId];
      let reply = '';
      if (text.includes('Tra cứu') || text.includes('quyền lợi')) {
        reply = `<strong>AI Trích xuất từ Knowledge Base:</strong><br>
HĐ <strong>${cust.company}</strong> (${cust.policyName}) tham gia quyền lợi trợ cấp viện phí mức <strong>${cust.benefit}</strong>. Hạn mức còn lại trong năm là <strong>${cust.quota}</strong>.<br>
<button class="btn-chip-insert" id="btn-insert-reply">📋 Chèn phản hồi vào khung chat</button>`;
      } else if (text.includes('chờ') || text.includes('loại trừ')) {
        reply = `<strong>Điều khoản loại trừ & Thời gian chờ:</strong><br>
• Thời gian chờ bệnh thông thường: 30 ngày (HĐ đã tham gia > 1 năm: Thỏa mãn).<br>
• Bệnh viện đa khoa quốc tế nằm trong danh mục cơ sở y tế được chi trả trực tiếp.<br>
<button class="btn-chip-insert" id="btn-insert-reply">📋 Chèn xác nhận vào khung chat</button>`;
      } else {
        reply = `<strong>AI Copilot:</strong> Đã phân tích yêu cầu <em>"${escapeHTML(text)}"</em> cho khách hàng <strong>${cust.name}</strong>. Dữ liệu đối soát bảo hiểm đã sẵn sàng hỗ trợ chuyên viên.`;
      }

      session.messages.push({ sender: 'agent', text: reply });
      renderAgentCopilot(currentCustomerId);

      // Bind insert button
      setTimeout(() => {
        const btnInsert = document.getElementById('btn-insert-reply');
        if (btnInsert && chatMessageInput) {
          btnInsert.addEventListener('click', () => {
            chatMessageInput.value = `Chào anh/chị ${cust.name}, bên em đã kiểm tra đối soát hồ sơ HĐ ${cust.company}. Quyền lợi của anh/chị hoàn toàn hợp lệ theo quy tắc sản phẩm ạ!`;
            chatMessageInput.focus();
            showToast('Đã chèn nội dung vào khung chat!');
          });
        }
      }, 50);
    }, 450);
  }

  // ==========================================
  // 12. QUICK SIDE LOOKUP (VIEW C)
  // ==========================================
  function renderSideQuickLookup(query = '') {
    const cust = customers[currentCustomerId];
    const pol = cust ? policyDatabase[cust.company] : null;

    if (sideLookupCurrentContent && pol) {
      sideLookupCurrentContent.innerHTML = `
        <div class="aligned-kv-row">
          <span class="aligned-kv-key">Policy No</span>
          <span class="aligned-kv-val bold policy-code">${escapeHTML(pol.policyId)}</span>
        </div>
        <div class="aligned-kv-row">
          <span class="aligned-kv-key">Owner</span>
          <span class="aligned-kv-val bold">${escapeHTML(pol.ownerName)}</span>
        </div>
        <div class="aligned-kv-row">
          <span class="aligned-kv-key">Plan</span>
          <span class="aligned-kv-val">${escapeHTML(pol.planName)}</span>
        </div>
        <div class="aligned-kv-row">
          <span class="aligned-kv-key">Sum Assured</span>
          <span class="aligned-kv-val bold">${escapeHTML(pol.sumAssured)}</span>
        </div>
        <div class="aligned-kv-row">
          <span class="aligned-kv-key">Status</span>
          <span class="aligned-kv-val"><span class="${pol.statusClass}">${escapeHTML(pol.status)}</span></span>
        </div>
      `;
    }

    if (btnSideOpenFullCurrent && pol) {
      btnSideOpenFullCurrent.onclick = () => {
        openFullPolicyExplorer(pol.policyId);
      };
    }

    // Filter directory list
    const q = (query || '').toLowerCase().trim();
    const policies = Object.values(policyDatabase).filter(p => {
      if (!q) return true;
      return p.policyId.toLowerCase().includes(q) ||
             p.ownerName.toLowerCase().includes(q) ||
             p.cccd.toLowerCase().includes(q) ||
             p.phone.toLowerCase().includes(q) ||
             p.planName.toLowerCase().includes(q);
    });

    if (sideLookupCount) {
      sideLookupCount.textContent = `${policies.length} Policies`;
    }

    if (sideLookupResultsList) {
      sideLookupResultsList.innerHTML = '';
      if (policies.length === 0) {
        sideLookupResultsList.innerHTML = `<div style="font-size: 11.5px; color: var(--text-muted); text-align: center; padding: 12px 0;">Không tìm thấy hợp đồng phù hợp</div>`;
        return;
      }
      policies.forEach(p => {
        const item = document.createElement('div');
        item.className = `side-lookup-item ${p.policyId === (pol ? pol.policyId : '') ? 'active' : ''}`;
        item.innerHTML = `
          <div class="side-lookup-item-top">
            <span class="side-lookup-pol-id">${escapeHTML(p.policyId)}</span>
            <span class="${p.statusClass}">${escapeHTML(p.status)}</span>
          </div>
          <div class="side-lookup-owner">${escapeHTML(p.ownerName)}</div>
          <div class="side-lookup-plan">${escapeHTML(p.planName)}</div>
          <div class="side-lookup-meta-row">
            <span>${escapeHTML(p.sumAssured)}</span>
            <span>ID: ${escapeHTML(p.cccd)}</span>
          </div>
        `;
        item.addEventListener('click', () => {
          openFullPolicyExplorer(p.policyId);
        });
        sideLookupResultsList.appendChild(item);
      });
    }
  }

  // ==========================================
  // 13. FULL-SCREEN DEDICATED POLICY EXPLORER
  // ==========================================
  function openFullPolicyExplorer(policyId) {
    activeViewMode = 'policy-explorer';
    if (policyId) selectedPolicyId = policyId;

    if (workspacePanes) workspacePanes.classList.add('hidden');
    if (fullPolicyLookupView) fullPolicyLookupView.classList.add('active');

    // Update Column 1 active states
    document.querySelectorAll('.nav-item-btn').forEach(btn => btn.classList.remove('active'));
    if (navItemPolicyLookup) navItemPolicyLookup.classList.add('active');

    renderFullPolicyDirectory(fullPolicySearchInput ? fullPolicySearchInput.value : '', fullLookupStatusFilter);
    renderFullPolicyDossier(selectedPolicyId);
    showToast(`Đã mở Cổng Tra cứu Hợp đồng Bảo hiểm toàn diện.`);
  }

  function closeFullPolicyExplorer() {
    activeViewMode = 'chat';
    if (fullPolicyLookupView) fullPolicyLookupView.classList.remove('active');
    if (workspacePanes) workspacePanes.classList.remove('hidden');

    if (navItemPolicyLookup) navItemPolicyLookup.classList.remove('active');
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === currentCategory);
    });
  }

  function renderFullPolicyDirectory(query = '', filter = 'all') {
    const q = (query || '').toLowerCase().trim();
    const cards = Object.values(policyDatabase).filter(p => {
      const matchFilter = filter === 'all' || p.status.toLowerCase() === filter.toLowerCase();
      if (!matchFilter) return false;
      if (!q) return true;
      return p.policyId.toLowerCase().includes(q) ||
             p.ownerName.toLowerCase().includes(q) ||
             p.cccd.toLowerCase().includes(q) ||
             p.phone.toLowerCase().includes(q) ||
             p.planName.toLowerCase().includes(q);
    });

    if (fullPolicyCardList) {
      fullPolicyCardList.innerHTML = '';
      if (cards.length === 0) {
        fullPolicyCardList.innerHTML = `<div style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 24px 10px;">Không tìm thấy hợp đồng bảo hiểm phù hợp</div>`;
        return;
      }

      cards.forEach(p => {
        const card = document.createElement('div');
        card.className = `full-policy-card ${p.policyId === selectedPolicyId ? 'active' : ''}`;
        card.innerHTML = `
          <div class="card-top-row">
            <span class="card-pol-number">${escapeHTML(p.policyId)}</span>
            <span class="${p.statusClass}">${escapeHTML(p.status)}</span>
          </div>
          <div class="card-owner-name">${escapeHTML(p.ownerName)}</div>
          <div class="card-plan-name">${escapeHTML(p.planName)}</div>
          <div class="card-footer-row">
            <span class="card-sum-assured">${escapeHTML(p.sumAssured)}</span>
            <span class="card-owner-meta">CCCD: ${escapeHTML(p.cccd)}</span>
          </div>
        `;
        card.addEventListener('click', () => {
          selectedPolicyId = p.policyId;
          document.querySelectorAll('.full-policy-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          renderFullPolicyDossier(selectedPolicyId);
        });
        fullPolicyCardList.appendChild(card);
      });
    }
  }

  function renderFullPolicyDossier(policyId) {
    const pol = policyDatabase[policyId] || policyDatabase['#POL-884920'];
    if (!fullLookupDossierPane || !pol) return;

    fullLookupDossierPane.innerHTML = `
      <div class="dossier-header-bar">
        <div class="dossier-heading-left">
          <span class="dossier-pol-id">${escapeHTML(pol.policyId)}</span>
          <span class="dossier-plan-title">${escapeHTML(pol.planName)}</span>
          <span class="${pol.statusClass}">${escapeHTML(pol.statusLabel)}</span>
        </div>
        <div class="dossier-actions">
          <button class="dossier-action-btn primary" id="btn-dossier-open-chat" title="Open chat with policyholder">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Open Conversation</span>
          </button>
          <button class="dossier-action-btn" id="btn-dossier-copy-id" title="Copy policy number">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy ID</span>
          </button>
        </div>
      </div>

      <div class="dossier-scroll-body">
        <!-- 1. General Policy Terms & Financial Overview -->
        <div class="details-card-box">
          <div class="card-box-header">
            <span class="card-box-title">GENERAL POLICY TERMS &amp; FINANCIAL OVERVIEW</span>
            <span class="meta-pill-blue">Contract Dossier</span>
          </div>
          <div class="dossier-grid-2col">
            <div class="aligned-kv-list">
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Policyholder</span>
                <span class="aligned-kv-val bold">${escapeHTML(pol.ownerName)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Insured Person</span>
                <span class="aligned-kv-val bold">${escapeHTML(pol.insuredName)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">National ID</span>
                <span class="aligned-kv-val">${escapeHTML(pol.cccd)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Phone</span>
                <span class="aligned-kv-val">${escapeHTML(pol.phone)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Email</span>
                <span class="aligned-kv-val">${escapeHTML(pol.email)}</span>
              </div>
            </div>

            <div class="aligned-kv-list">
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Sum Assured</span>
                <span class="aligned-kv-val bold">${escapeHTML(pol.sumAssured)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Annual Premium</span>
                <span class="aligned-kv-val bold">${escapeHTML(pol.annualPremium)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Payment Frequency</span>
                <span class="aligned-kv-val">${escapeHTML(pol.paymentFrequency)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Effective Date</span>
                <span class="aligned-kv-val">${escapeHTML(pol.effectiveDate)}</span>
              </div>
              <div class="aligned-kv-row">
                <span class="aligned-kv-key">Next Due Date</span>
                <span class="aligned-kv-val bold" style="color: #d97706;">${escapeHTML(pol.nextDueDate)}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Benefit Schedule & Coverage Breakdown -->
        <div class="details-card-box">
          <div class="card-box-header">
            <span class="card-box-title">BENEFIT SCHEDULE &amp; COVERAGE BREAKDOWN</span>
          </div>
          <div class="aligned-kv-list">
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Death &amp; TPD Benefit</span>
              <span class="aligned-kv-val bold">${escapeHTML(pol.benefits.deathOrTPD)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Hospitalization Cash</span>
              <span class="aligned-kv-val">${escapeHTML(pol.benefits.hospitalization)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">ICU Allowance</span>
              <span class="aligned-kv-val">${escapeHTML(pol.benefits.icu)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Surgical Treatment</span>
              <span class="aligned-kv-val">${escapeHTML(pol.benefits.surgery)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Critical Illness</span>
              <span class="aligned-kv-val">${escapeHTML(pol.benefits.criticalIllness)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Annual Quota</span>
              <span class="aligned-kv-val bold" style="color: var(--brand-blue);">${escapeHTML(pol.benefits.annualQuota)}</span>
            </div>
          </div>
        </div>

        <!-- 3. Beneficiary Designation & Legal Share -->
        <div class="details-card-box">
          <div class="card-box-header">
            <span class="card-box-title">BENEFICIARY DESIGNATION &amp; LEGAL SHARE</span>
          </div>
          <div class="aligned-kv-list">
            <div class="aligned-kv-row">
              <span class="aligned-kv-key">Beneficiary Name</span>
              <span class="aligned-kv-val bold">${escapeHTML(pol.beneficiary.name)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key">Relationship</span>
              <span class="aligned-kv-val">${escapeHTML(pol.beneficiary.relation)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key">National ID</span>
              <span class="aligned-kv-val">${escapeHTML(pol.beneficiary.cccd)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key">Share Ratio</span>
              <span class="aligned-kv-val bold" style="color: #059669;">${escapeHTML(pol.beneficiary.share)}</span>
            </div>
          </div>
        </div>

        <!-- 4. Cash Value & APL Status -->
        <div class="details-card-box">
          <div class="card-box-header">
            <span class="card-box-title">POLICY CASH VALUE &amp; AUTOMATIC PREMIUM LOAN (APL)</span>
          </div>
          <div class="aligned-kv-list">
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Current Cash Value</span>
              <span class="aligned-kv-val bold">${escapeHTML(pol.cashValue)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">Max Available Loan (80%)</span>
              <span class="aligned-kv-val bold" style="color: #059669;">${escapeHTML(pol.loanAvailable)}</span>
            </div>
            <div class="aligned-kv-row">
              <span class="aligned-kv-key" style="width: 140px;">APL Condition</span>
              <span class="aligned-kv-val">${escapeHTML(pol.aplStatus)}</span>
            </div>
          </div>
        </div>

        <!-- 5. Linked Tickets & Claims -->
        <div class="details-card-box">
          <div class="card-box-header">
            <span class="card-box-title">LINKED TICKETS &amp; CLAIMS</span>
          </div>
          <div class="details-recent-convos">
            ${pol.activeTickets.map(t => `
              <div class="recent-convo-item">
                <div class="convo-item-top">
                  <span class="convo-time">${escapeHTML(t.id)}</span>
                  <span class="meta-pill-blue">${escapeHTML(t.status)}</span>
                </div>
                <p class="convo-snippet">${escapeHTML(t.title)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Bind action buttons
    const btnDossierOpenChat = document.getElementById('btn-dossier-open-chat');
    if (btnDossierOpenChat && pol.customerId && customers[pol.customerId]) {
      btnDossierOpenChat.onclick = () => {
        closeFullPolicyExplorer();
        selectCategory(customers[pol.customerId].category || 'request');
        activateCustomer(pol.customerId);
        showToast(`Đã chuyển tới hội thoại của khách hàng ${pol.ownerName}`);
      };
    }

    const btnDossierCopyId = document.getElementById('btn-dossier-copy-id');
    if (btnDossierCopyId) {
      btnDossierCopyId.onclick = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(pol.policyId).then(() => {
            showToast(`Đã sao chép mã số hợp đồng: ${pol.policyId}`);
          }).catch(() => {
            showToast(`Mã số hợp đồng: ${pol.policyId}`);
          });
        } else {
          showToast(`Mã số hợp đồng: ${pol.policyId}`);
        }
      };
    }
  }

  // ==========================================
  // 14. EVENT LISTENERS
  // ==========================================

  // Column 1 Category & Tools Buttons
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      if (mode === 'policy-lookup') {
        openFullPolicyExplorer();
        return;
      }
      const cat = btn.getAttribute('data-category');
      if (cat) {
        if (activeViewMode === 'policy-explorer') {
          closeFullPolicyExplorer();
        }
        selectCategory(cat);
      }
    });
  });

  // Return to Inbox from Full Policy Explorer
  if (btnReturnInbox) {
    btnReturnInbox.addEventListener('click', closeFullPolicyExplorer);
  }

  // Vertical Sub-Rail Buttons (Info, Copilot, Lookup)
  if (railBtnDetails) {
    railBtnDetails.addEventListener('click', () => switchRightPanel('details'));
  }
  if (railBtnAgent) {
    railBtnAgent.addEventListener('click', () => switchRightPanel('agent'));
  }
  if (railBtnLookup) {
    railBtnLookup.addEventListener('click', () => switchRightPanel('lookup'));
  }

  // Side Quick Lookup Inputs & Buttons
  if (btnCloseLookup) {
    btnCloseLookup.addEventListener('click', () => switchRightPanel('details'));
  }
  if (sideLookupInput) {
    sideLookupInput.addEventListener('input', (e) => {
      renderSideQuickLookup(e.target.value);
    });
  }

  // Full-Screen Policy Explorer Search & Status Filters
  if (fullPolicySearchInput) {
    fullPolicySearchInput.addEventListener('input', (e) => {
      renderFullPolicyDirectory(e.target.value, fullLookupStatusFilter);
    });
  }

  document.querySelectorAll('.status-filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.status-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      fullLookupStatusFilter = pill.getAttribute('data-filter') || 'all';
      renderFullPolicyDirectory(fullPolicySearchInput ? fullPolicySearchInput.value : '', fullLookupStatusFilter);
    });
  });

  // Sidebar Collapse Toggle (Icon-only mini mode or full mode)
  const brandWrap = document.querySelector('.brand-dropdown-wrap');
  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      toggleSidebarBtn.title = isCollapsed ? 'Mở rộng Sidebar' : 'Thu gọn Sidebar';
      if (brandWrap) {
        brandWrap.title = isCollapsed ? 'Nhấn để mở rộng thanh điều hướng' : 'Cổng CSKH Bảo Hiểm Nhân Thọ AegisLife';
      }
      showToast(isCollapsed ? 'Đã thu gọn thanh điều hướng sang dạng biểu tượng (icon-only).' : 'Đã mở rộng thanh điều hướng.');
    });
  }

  // Click Logo to expand sidebar when collapsed
  if (brandWrap && sidebar) {
    brandWrap.addEventListener('click', () => {
      if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        if (toggleSidebarBtn) {
          toggleSidebarBtn.title = 'Thu gọn Sidebar';
        }
        brandWrap.title = 'Cổng CSKH Bảo Hiểm Nhân Thọ AegisLife';
        showToast('Đã mở rộng thanh điều hướng.');
      }
    });
  }

  // Click Search Box when collapsed -> expand and focus search input
  const navSearchBox = document.querySelector('.nav-search-box');
  if (navSearchBox && sidebar && globalSearch) {
    navSearchBox.addEventListener('click', (e) => {
      if (sidebar.classList.contains('collapsed')) {
        e.preventDefault();
        sidebar.classList.remove('collapsed');
        if (toggleSidebarBtn) {
          toggleSidebarBtn.title = 'Thu gọn Sidebar';
        }
        setTimeout(() => globalSearch.focus(), 150);
        showToast('Đã mở rộng thanh tìm kiếm.');
      }
    });
  }

  // Column 2 Filter Input
  if (sidebarCustSearch) {
    sidebarCustSearch.addEventListener('input', (e) => {
      renderCustomerListColumn(currentCategory, e.target.value);
    });
  }

  // Chat Send Events
  if (btnSendChat) {
    btnSendChat.addEventListener('click', sendMessage);
  }
  if (chatMessageInput) {
    chatMessageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Takeover Toggle (Req 7: Staff Takeover)
  if (btnTakeover) {
    btnTakeover.addEventListener('click', () => {
      isTakeover = !isTakeover;
      btnTakeover.classList.toggle('active', isTakeover);
      showToast(isTakeover ? '🟢 Chuyên viên Suvigya đang tiếp quản hội thoại trực tiếp.' : '⚪ Đã chuyển giao lại quyền điều phối cho AI Agent.');
    });
  }

  // Quick Macro Button
  if (btnMacroPopup && chatMessageInput) {
    btnMacroPopup.addEventListener('click', () => {
      const cust = customers[currentCustomerId];
      chatMessageInput.value = `Chào anh/chị ${cust ? cust.name : ''}, em là Suvigya chuyên viên CSKH phụ trách hồ sơ của anh/chị ạ!`;
      chatMessageInput.focus();
    });
  }

  // Close Agent -> Back to Details
  if (btnCloseAgent) {
    btnCloseAgent.addEventListener('click', () => {
      switchRightPanel('details');
    });
  }

  // Toggle Details Column via Rail Button
  if (btnToggleDetails && rightPanelCol) {
    btnToggleDetails.addEventListener('click', () => {
      const isCurrentlyCollapsed = rightPanelCol.classList.toggle('collapsed');
      updateTogglePanelButtonState(isCurrentlyCollapsed);
      showToast(isCurrentlyCollapsed ? 'Đã thu gọn cột thông tin chi tiết.' : 'Đã mở rộng cột thông tin chi tiết.');
    });
  }
  if (btnCloseDetails && rightPanelCol) {
    btnCloseDetails.addEventListener('click', () => {
      rightPanelCol.classList.add('collapsed');
      updateTogglePanelButtonState(true);
      showToast('Đã thu gọn cột thông tin chi tiết.');
    });
  }

  // Agent Query Box (Req 8)
  if (btnSidecarSend) {
    btnSidecarSend.addEventListener('click', () => sendPromptToAgent());
  }
  if (sidecarAgentInput) {
    sidecarAgentInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendPromptToAgent();
      }
    });
  }

  // Live Font Family Selector (GIỮ LẠI THEO YÊU CẦU CỦA USER)
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      document.body.style.fontFamily = e.target.value;
      showToast(`Đã chuyển font chữ: ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // Staff Profile Card Click -> Navigate to Staff Login Page
  const staffCard = document.getElementById('staff-card');
  if (staffCard) {
    staffCard.title = 'Nhấn để chuyển sang trang Đăng nhập Chuyên viên (staff-login.html)';
    staffCard.addEventListener('click', () => {
      showToast('Đang chuyển hướng tới trang Đăng nhập Chuyên viên CSKH...');
      setTimeout(() => {
        window.location.href = 'staff-login.html';
      }, 500);
    });
  }

  // ==========================================
  // 15. INITIALIZATION
  // ==========================================
  updateCategoryBadges();
  selectCategory('request'); // Mở hàng đợi Yêu cầu tiếp nhận làm mặc định (Req 5, 7, 9)
  renderSideQuickLookup('');
});

