export const products = {
  categories: [
    {
      name: 'Platforms',
      translationId: 'platforms',
      description:
        'Power your organization’s digital transformation by modernizing your security program',
      icon: 'platform',
      link: '/products/cloud-pak-for-security',
      products: [
        {
          name: 'IBM Cloud Pak for Security',
          longDescription:
            'Gain insights into threats and risks and respond faster with automation across hybrid, multicloud environments',
          url: '/products/cloud-pak-for-security',
          translationId: 'cloudPak',
        },
      ],
    },
    {
      name: 'Data security',
      translationId: 'dataSecurity',
      description:
        'Discover, classify and protect sensitive data across multiple environments while meeting privacy regulations and simplifying operational complexity',
      icon: 'data-security',
      link: '/security/data-security',
      products: [
        {
          name: 'IBM Security Guardium Insights',
          longDescription:
            'Enhance visibility, cut response time, surface key risk insights to uncover hidden threats—and deploy it anywhere',
          url: '/products/guardium-insights',
          translationId: 'guardiumInsights',
        },
        {
          name: 'IBM Security Guardium Data Protection',
          longDescription:
            'Take a smarter, more adaptive approach to protecting critical data wherever it resides with visibility, automation and scalability',
          url: '/security/data-security/guardium',
          translationId: 'guardiumProtection',
        },
        {
          name: 'IBM Security Guardium Data Encryption',
          longDescription:
            'Protect and control access to databases, files and containers with encryption, tokenization, data masking and key management',
          url: '/products/guardium-data-encryption',
          translationId: 'guardiumEncryption',
        },
        {
          name: 'IBM Data Security Services',
          longDescription:
            'Discover, identify and protect, and monitor services for your most sensitive data wherever it resides',
          url: '/security/services/data-security',
          translationId: 'dataSecurityServices',
        },
        {
          name: 'IBM Application Security Services',
          longDescription:
            'Address application security challenges from discovering and remediating vulnerabilities to improving your application development',
          url: '/security/services/application-security-services',
          translationId: 'applicationSecurityServices',
        },
      ],
    },
    {
      name: 'Identity and access management',
      translationId: 'iam',
      description:
        'Deliver a frictionless and secure experience for every user, asset and data interaction across your environment',
      icon: 'iam',
      link: '/security/identity-access-management',
      products: [
        {
          name: 'IBM Security Verify',
          longDescription:
            'Use deep context to automate risk protection and continuously authenticate any user to any resource seamlessly',
          url: '/security/identity-access-management/cloud-identity',
          translationId: 'verify',
        },
        {
          name: 'IBM Security Verify Privileged',
          longDescription:
            'Reduce the risk of cyber attack and secure digital business with privileged access management, application control and endpoint privilege security',
          url: '/security/identity-access-management/privileged-access-management',
          translationId: 'verifyPriviledged',
        },
        {
          name: 'IBM Identity and Access Management Services',
          longDescription:
            'Extend your teams to plan, identify roadblocks, architect, deploy and manage outcome-driven identity solutions',
          url: '/security/services/identity-access-management',
          translationId: 'iamServices',
        },
      ],
    },
    {
      name: 'Services',
      translationId: 'services',
      description:
        'Accelerate your business transformation and reduce risk across your organization with cybersecurity consulting, cloud and managed security services',
      icon: 'services',
      link: '/security/services',
      products: [
        {
          name: 'Managed security services',
          longDescription:
            'Trust your security partner to help monitor, manage and respond to advanced threats, risks and compliance requirements',
          url: '/security/services/managed-security-services',
          translationId: 'managedSecurityServices',
        },
        {
          name: 'Security Strategy, Risk and Compliance Services',
          longDescription:
            'Evaluate your existing security risks, compliance and governance against your business challenges, requirements and objectives',
          url: '/security/services/security-governance',
          translationId: 'strategyRiskComplianceServices',
        },
        {
          name: 'Cloud security services',
          longDescription:
            'Adapt your security practices into a programmatic approach at each stage of your journey to cloud, and stay ahead of security threats',
          url: '/security/services/cloud-security-services',
          translationId: 'cloudSecurityServices',
        },
      ],
    },
    {
      name: 'SIEM',
      translationId: 'siem',
      description:
        'Gain centralized visibility to detect, investigate and respond to your most critical organization-wide cybersecurity threats',
      icon: 'siem',
      link: '/security/security-intelligence',
      products: [
        {
          name: 'IBM Security QRadar',
          longDescription:
            'Realize actionable insights, quickly identify the top threats and reduce the total alert volume to solve your critical security challenges',
          url: '/security/security-intelligence/qradar',
          translationId: 'qradar',
        },
        {
          name: 'IBM Security QRadar on Cloud',
          longDescription:
            'Take action before any considerable damage is done by focusing on detecting cybersecurity attacks and network breaches with Cloud SIEM',
          url: '/products/hosted-security-intelligence',
          translationId: 'qradarCloud',
        },
        {
          name: 'IBM Security Threat Management Services',
          longDescription:
            'Protect your enterprise’s operations with integrated security services to manage the full threat lifecycle with accuracy and speed',
          url: '/security/services/threat-management',
          translationId: 'threatManagementServices',
        },
        {
          name: 'IBM Security Managed Detection and Response Services',
          longDescription:
            'Stop threats and speed response with threat intelligence and proactive threat hunting to identify and remediate advanced threats',
          url: '/security/services/managed-detection-response',
          translationId: 'managedDetectionResponseServices',
        },
      ],
    },
    {
      name: 'SOAR',
      translationId: 'soar',
      description:
        'Accelerate your incident response with a security orchestration, automation and response (SOAR) platform',
      icon: 'soar',
      link: '/security/intelligent-orchestration',
      products: [
        {
          name: 'IBM Cloud Pak for Security',
          longDescription:
            'Use automation and third-party integrations to improve productivity and the effectiveness of deployed technologies',
          url: '/products/cloud-pak-for-security/soar',
          translationId: 'cloudPakSoar',
        },
        {
          name: 'IBM Security X-Force',
          longDescription:
            'Proactively manage and respond to security threats by integrating security threat intelligence, incident response and remediation',
          url: '/security/services/ibm-x-force-incident-response-and-intelligence',
          translationId: 'xForce',
        },
      ],
    },
  ],
};
