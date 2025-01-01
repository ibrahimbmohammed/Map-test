export type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dob: string;
};

export const mockedData3 = [
  {
    id: 'INC2023-011',
    severity: 'High',
    status: 'Open',
    date: 'August 15, 2023',
    description: 'DDoS attack affecting customer-facing services.',
    affectedSystems: ['Web Servers', 'API Servers'],
    attackVector: 'Distributed Denial of Service',
    threatSource: 'Botnet',
    incidentCategory: 'DDoS Attack',
    details:
      "A massive DDoS attack targeted the company's web servers, causing a significant increase in traffic and rendering the services temporarily unavailable. The security team implemented countermeasures to mitigate the impact.",
    mitigationStrategies: [
      'Deploy a content delivery network (CDN) to distribute traffic and absorb DDoS attacks.',
      'Implement rate limiting and traffic filtering to block malicious traffic.',
      'Collaborate with ISPs to identify and block malicious source IPs.',
      'Monitor network traffic and traffic anomalies in real-time.',
      'Set up incident response plans for rapid mitigation.',
    ],
    incidentResponseGuidance: [
      'Activate the incident response team and assign roles.',
      'Initiate communication with internet service providers (ISPs) to block malicious traffic.',
      'Deploy anti-DDoS measures such as traffic scrubbing and rate limiting.',
      'Monitor the network for signs of additional attack vectors.',
      'Collaborate with third-party security experts if necessary.',
      "Keep stakeholders informed of the incident's progress and impact.",
      'Perform a post-incident analysis to identify lessons learned.',
    ],
    timeline: [
      { event: 'Attack detected', timestamp: 'August 15, 2023: 09:30 AM' },
      { event: 'Mitigation measures deployed', timestamp: 'August 16, 2023: 10:00 AM' },
      {
        event: 'Services restored and post-incident analysis',
        timestamp: 'August 17, 2023: 11:45 AM',
      },
    ],
  },
  {
    id: 'INC2023-012',
    severity: 'Medium',
    status: 'In Progress',
    date: 'August 20, 2023',
    description: 'Data leakage from a misconfigured cloud storage bucket.',
    affectedSystems: ['Cloud Storage', 'Sensitive Data'],
    attackVector: 'Misconfiguration',
    threatSource: 'Public Internet',
    incidentCategory: 'Data Leakage',
    details:
      'Sensitive company data was accidentally exposed due to a misconfigured cloud storage bucket. The security team quickly identified the issue, secured the data, and initiated an audit of other cloud resources.',
    mitigationStrategies: [
      'Implement strict access controls and authentication mechanisms for cloud resources.',
      'Regularly review and assess cloud resource configurations.',
      'Use automated tools to detect misconfigured cloud resources.',
      'Encrypt sensitive data before storing it in the cloud.',
      'Train employees on proper cloud security practices.',
    ],
    incidentResponseGuidance: [
      'Contain the data exposure by securing the misconfigured bucket.',
      'Determine the extent of data exposure and the potential impact.',
      'Notify stakeholders and legal teams, if necessary.',
      'Audit other cloud resources for similar misconfigurations.',
      'Review access logs and identify the root cause of the misconfiguration.',
      'Implement measures to prevent future cloud resource misconfigurations.',
      'Update cloud security policies and educate employees on cloud security.',
    ],
    timeline: [
      { event: 'Data exposure detected', timestamp: 'August 20, 2023: 01:15 PM' },
      {
        event: 'Data secured and misconfiguration resolved',
        timestamp: 'August 21, 2023: 02:30 PM',
      },
      { event: 'Cloud resource audit and recommendations', timestamp: 'August 23, 2023: 03:45 PM' },
    ],
  },
  {
    id: 'INC2023-013',
    severity: 'Low',
    status: 'Resolved',
    date: 'August 25, 2023',
    description: 'Insider threat involving unauthorized data access.',
    affectedSystems: ['Database', 'Employee Access'],
    attackVector: 'Unauthorized Access',
    threatSource: 'Employee with Malicious Intent',
    incidentCategory: 'Insider Threat',
    details:
      "An employee with malicious intent gained unauthorized access to sensitive customer data. The incident was promptly detected, the employee's access was revoked, and measures were taken to prevent similar incidents in the future.",
    mitigationStrategies: [
      'Implement the principle of least privilege for employee access.',
      'Monitor user activities and access logs for unusual behavior.',
      'Enable multi-factor authentication for sensitive systems.',
      'Conduct regular employee training on security awareness.',
      'Implement data loss prevention (DLP) solutions.',
    ],
    incidentResponseGuidance: [
      "Contain the incident by revoking the employee's access.",
      'Determine the extent of unauthorized data access and data exposure.',
      "Perform a thorough investigation to identify the employee's motive.",
      'Collect evidence, including access logs and employee behavior.',
      'Coordinate with HR and legal teams to take appropriate actions.',
      'Implement additional controls for preventing insider threats.',
      'Educate employees on security policies and consequences of insider threats.',
    ],
    timeline: [
      { event: 'Unauthorized access detected', timestamp: 'August 25, 2023: 09:00 AM' },
      { event: 'Employee access revoked and data audit', timestamp: 'August 26, 2023: 10:30 AM' },
      {
        event: 'Employee investigation and security enhancements',
        timestamp: 'August 28, 2023: 12:15 PM',
      },
    ],
  },
  {
    id: 'INC2023-017',
    severity: 'Medium',
    status: 'Open',
    date: 'September 20, 2023',
    description: 'Unauthorized data exfiltration via employee email.',
    affectedSystems: ['Email Server', 'Sensitive Data'],
    attackVector: 'Data Exfiltration',
    threatSource: 'Internal',
    incidentCategory: 'Data Breach',
    details:
      'An employee inadvertently sent sensitive customer data to an external email address. The security team identified the incident, blocked the exfiltration, and initiated an investigation.',
    mitigationStrategies: [
      'Block the email containing sensitive data from reaching the external recipient.',
      'Notify legal and compliance teams for regulatory assessment.',
      'Conduct a forensic analysis to determine the extent of data exposure.',
      'Enhance employee training on handling sensitive information.',
      'Implement email data loss prevention (DLP) controls.',
    ],
    incidentResponseGuidance: [
      'Immediately block the unauthorized data exfiltration.',
      'Contain the incident to prevent further data leakage.',
      'Perform a thorough investigation to determine the cause.',
      'Assess the scope of data exposed and notify affected customers.',
      'Collaborate with legal team to adhere to legal and regulatory requirements.',
      'Educate employees on data handling policies and procedures.',
    ],
    timeline: [
      { event: 'Incident detected', timestamp: '09:30 AM' },
      { event: 'Unauthorized email blocked', timestamp: '09:45 AM' },
      { event: 'Investigation initiated', timestamp: '10:00 AM' },
    ],
  },
  {
    id: 'INC2023-018',
    severity: 'High',
    status: 'In Progress',
    date: 'September 25, 2023',
    description: 'Distributed Denial of Service (DDoS) attack on web servers.',
    affectedSystems: ['Web Servers', 'Network Infrastructure'],
    attackVector: 'DDoS',
    threatSource: 'External',
    incidentCategory: 'Cyber Attack',
    details:
      "A DDoS attack targeted the organization's web servers, resulting in degraded performance. The security team identified the attack, implemented traffic filtering, and collaborated with the Internet Service Provider (ISP) to mitigate the attack.",
    mitigationStrategies: [
      'Implement traffic filtering and rate limiting on network devices.',
      'Work with ISP to redirect traffic through a DDoS mitigation service.',
      'Distribute traffic across multiple server instances.',
      'Monitor for botnet patterns and identify attack vectors.',
      'Update intrusion detection/prevention systems (IDS/IPS).',
    ],
    incidentResponseGuidance: [
      'Identify the scale and nature of the DDoS attack.',
      'Activate DDoS mitigation solutions to filter malicious traffic.',
      'Collaborate with ISP to reroute traffic through DDoS protection.',
      'Monitor server performance and network traffic for anomalies.',
      'Maintain communication with the ISP and DDoS mitigation service.',
      'Analyze attack patterns and identify potential threat sources.',
    ],
    timeline: [
      { event: 'Attack detected', timestamp: '02:00 PM' },
      { event: 'DDoS mitigation activated', timestamp: '02:15 PM' },
      { event: 'ISP collaboration initiated', timestamp: '02:30 PM' },
    ],
  },
  {
    id: 'INC2023-019',
    severity: 'Low',
    status: 'Resolved',
    date: 'September 30, 2023',
    description: 'Malicious software detected on employee workstation.',
    affectedSystems: ['Employee Workstation'],
    attackVector: 'Malware',
    threatSource: 'External',
    incidentCategory: 'Malware Infection',
    details:
      "A malware infection was detected on an employee's workstation. The security team isolated the workstation, removed the malware, and initiated a scan on other systems.",
    mitigationStrategies: [
      'Isolate the infected workstation from the network.',
      'Update antivirus signatures and perform a full system scan.',
      'Identify the malware type and potential entry point.',
      'Educate employees on safe browsing habits and email attachments.',
    ],
    incidentResponseGuidance: [
      'Disconnect the infected workstation from the network.',
      'Scan the system using updated antivirus software.',
      'Remove the malware and restore the workstation to a clean state.',
      "Investigate the malware's origin and infection vector.",
      'Update security measures to prevent future malware incidents.',
      'Conduct awareness training on recognizing and reporting malware.',
    ],
    timeline: [
      { event: 'Infection detected', timestamp: '11:15 AM' },
      { event: 'Workstation isolated', timestamp: '11:30 AM' },
      { event: 'Malware removed', timestamp: '12:00 PM' },
    ],
  },
];
