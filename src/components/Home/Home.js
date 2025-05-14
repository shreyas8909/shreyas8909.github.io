import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import HomeHero from '../HomeHero/HomeHero';
import HomeFooter from '../HomeFooter/HomeFooter';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaShieldAlt, FaCode, FaBrain, FaUserTie, FaHourglass, FaQuestionCircle, FaFileAlt, FaCheckCircle, FaSearch, FaClock, FaCreditCard, FaExclamationCircle, FaHandshake, FaUsers, FaLinkedin } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import DocAILogo from '../Logo/DocAILogo';
import ChatbotLogo from '../Logo/ChatbotLogo';
import VMSLogo from '../Logo/VMSLogo';
import './Home.css';
import Contact from '../Contact/Contact';

const ChallengeSection = () => {
  const challenges = [
    {
      title: 'Time-Consuming Manual Processes',
      description: 'Manual underwriting processes are time-consuming, prone to inconsistencies, and can delay customer onboarding.',
      icon: <FaHourglass />
    },
    {
      title: 'Complex Data Extraction',
      description: 'Claims processing often involves complex data extraction and lengthy review cycles, impacting customer satisfaction and operational costs.',
      icon: <FaFileAlt />
    },
    {
      title: 'Risk Assessment Accuracy',
      description: 'Accurate risk assessment with traditional methods can be challenging, leading to potential discrepancies and financial implications.',
      icon: <FaQuestionCircle />
    }
  ];

  return (
    <section id="challenges" style={{ padding: '100px 20px', backgroundColor: '#f8f9fa', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Navigating the Bottlenecks in Insurance
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 3
      }}>
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              zIndex: 3,
              transition: 'transform 0.3s ease'
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              background: 'linear-gradient(45deg, #14bef0, #28328c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              {challenge.icon}
            </div>
            <h3 style={{
              fontSize: '1.4rem',
              color: '#28328c',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              {challenge.title}
            </h3>
            <p style={{
              color: '#444',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" style={{ padding: '100px 20px', backgroundColor: '#f5f9fc', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Our AI Product Suite: Precision, Speed, and Insight
        </h2>
      </div>
      
      {/* Underwriting Product */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 80px',
        position: 'relative',
        zIndex: 3 
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 3,
          flexDirection: window.innerWidth <= 1024 ? 'column' : 'row'
        }}>
          <div style={{
            padding: '40px',
            flex: '1',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '10px',
                color: '#28328c',
                fontWeight: '700',
                position: 'relative',
                zIndex: 3
              }}>AI-Driven Medical Underwriting Automation</h3>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 3
              }}>Streamlining Medical Underwriting. Enhancing Accuracy.</p>
            </div>
            <div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaSearch />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Clinical Insight Extraction</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Automatically extracts and analyzes critical clinical insights from diverse diagnostic documents.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Guideline Compliance</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Intelligently checks data against underwriting guidelines, instantly flagging discrepancies and risks.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaClock />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Reduced Manual Review</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Significantly cuts down manual review time, empowering underwriters to focus on complex cases.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaChartLine />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Improved Decision Accuracy</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Enhances the precision of underwriting decisions through consistent, data-driven analysis.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minHeight: window.innerWidth <= 768 ? '250px' : '400px',
            position: 'relative',
            zIndex: 2,
            order: window.innerWidth <= 1024 ? '-1' : '0'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(45deg, rgba(20, 190, 240, 0.7), rgba(40, 50, 140, 0.9))',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
              zIndex: 2
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Claims Processing Product */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 80px',
        position: 'relative',
        zIndex: 3 
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 3,
          flexDirection: window.innerWidth <= 1024 ? 'column' : 'row-reverse'
        }}>
          <div style={{
            padding: '40px',
            flex: '1',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '10px',
                color: '#28328c',
                fontWeight: '700',
                position: 'relative',
                zIndex: 3
              }}>Automated Claims Processing</h3>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 3
              }}>Accelerating Claims. Reducing Fraud. Improving Outcomes.</p>
            </div>
            <div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaFileAlt />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Automated Data Extraction</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Automated data extraction from claim documents.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaExclamationCircle />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Intelligent Fraud Detection</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Intelligent fraud detection patterns.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaCreditCard />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Faster Claims Settlement</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Faster claims settlement cycles.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 3
                }}>
                  <FaChartLine />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '5px',
                    color: '#333',
                    position: 'relative',
                    zIndex: 3
                  }}>Reduced Operational Costs</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3
                  }}>Reduced operational costs.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minHeight: window.innerWidth <= 768 ? '250px' : '400px',
            position: 'relative',
            zIndex: 2,
            order: window.innerWidth <= 1024 ? '-1' : '0'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(45deg, rgba(40, 50, 140, 0.7), rgba(20, 190, 240, 0.9))',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
              zIndex: 2
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InnovationSection = () => {
  return (
    <section id="innovation" style={{ padding: '100px 20px', backgroundColor: '#f8f9fa', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Beyond a Vision: The Next Wave of Risk Profiling
        </h2>
      </div>
      <div style={{ 
        display: 'flex', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
        flexDirection: window.innerWidth <= 1024 ? 'column' : 'row'
      }}>
        <div style={{
          flex: '1',
          position: 'relative',
          zIndex: 3,
          width: window.innerWidth <= 1024 ? '100%' : 'auto',
          marginBottom: window.innerWidth <= 1024 ? '30px' : '0'
        }}>
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            backgroundImage: 'linear-gradient(135deg, rgba(20, 190, 240, 0.6), rgba(40, 50, 140, 0.8))',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: 2
          }}></div>
        </div>
        <div style={{
          flex: '1',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          padding: '35px',
          borderRadius: '20px',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 3
        }}>
          <p style={{ 
            marginBottom: '15px', 
            lineHeight: '1.8', 
            color: '#444', 
            position: 'relative', 
            zIndex: 3,
            fontSize: '1.1rem'
          }}>
            At Neuralkart, we are continuously exploring groundbreaking technologies to redefine insurance processes. Our current research and ideation focus includes the potential of non-invasive, video-based health assessments.
          </p>
          <p style={{ 
            marginBottom: '15px', 
            lineHeight: '1.8', 
            color: '#444', 
            position: 'relative', 
            zIndex: 3,
            fontSize: '1.1rem'
          }}>
            By leveraging advanced facial analysis, we aim to derive valuable health insights that can enhance risk profiling in a secure and user-centric manner.
          </p>
          <p style={{ 
            marginBottom: '15px', 
            lineHeight: '1.8', 
            color: '#444', 
            position: 'relative', 
            zIndex: 3,
            fontSize: '1.1rem'
          }}>
            While this technology is in the early stages of research and development, we believe it holds the promise to become a significant differentiator, offering a more holistic and efficient approach to understanding risk.
          </p>
          <p style={{ 
            fontStyle: 'italic', 
            color: '#777', 
            fontSize: '0.9rem', 
            marginTop: '30px', 
            position: 'relative', 
            zIndex: 3
          }}>
            This is an area of ongoing research and development.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom AI Model Development & Integration',
      icon: <FaBrain />
    },
    {
      title: 'Scalable Software Architecture & Development',
      icon: <FaCode />
    },
    {
      title: 'Data Analytics & Insight Generation',
      icon: <FaChartLine />
    }
  ];

  return (
    <section id="services" className="neuralkart-services-section" style={{ padding: '100px 20px', backgroundColor: '#f8f9fa', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          End-to-End Software Solutions & AI Expertise
        </h2>
      </div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 50px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 5,
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '15px', lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
            Beyond our core product suite, Neuralkart offers bespoke software development and AI consultancy services. We partner with businesses to design, build, and scale robust, end-to-end software solutions.
          </p>
          <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
            Our team of experienced engineers and AI specialists can help you tackle complex challenges and accelerate your innovation roadmap.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          position: 'relative',
          zIndex: 3
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 3,
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'linear-gradient(45deg, #14bef0, #28328c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                color: 'white',
                margin: '0 auto 20px'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#28328c',
                marginBottom: '15px',
                fontWeight: '600'
              }}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientSuccessSection = () => {
  return (
    <section id="success" style={{ padding: '100px 20px', backgroundColor: '#ffffff', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Delivering Value: Our Partnership with Chola MS
        </h2>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 3
        }}>
          <div style={{
            width: '200px',
            height: '100px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#333',
            position: 'relative',
            zIndex: 3
          }}>Chola MS</div>
        </div>
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 3
        }}>
          <p style={{
            marginBottom: '30px',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            color: '#444',
            position: 'relative',
            zIndex: 3
          }}>
            Neuralkart is proud to collaborate with leading insurers like Chola MS. They entrust us with key AI and software development use cases, leveraging our expertise to enhance their operations and drive innovation.
          </p>
          
          <div style={{
            backgroundColor: 'rgba(248, 249, 250, 0.9)',
            padding: '30px',
            borderRadius: '16px',
            marginTop: '20px',
            position: 'relative',
            zIndex: 3,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              marginBottom: '25px',
              position: 'relative',
              zIndex: 3,
              textAlign: 'left'
            }}>
              <h4 style={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: '#333',
                position: 'relative',
                zIndex: 3
              }}>
                <span style={{
                  color: '#14bef0',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 3
                }}>Challenge:</span>
              </h4>
              <p style={{
                margin: '0',
                color: '#555',
                position: 'relative',
                zIndex: 3,
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                Needed to streamline specific AI-driven processes in their underwriting workflow.
              </p>
            </div>
            <div style={{
              marginBottom: '25px',
              position: 'relative',
              zIndex: 3,
              textAlign: 'left'
            }}>
              <h4 style={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: '#333',
                position: 'relative',
                zIndex: 3
              }}>
                <span style={{
                  color: '#14bef0',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 3
                }}>Neuralkart's Role:</span>
              </h4>
              <p style={{
                margin: '0',
                color: '#555',
                position: 'relative',
                zIndex: 3,
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                Neuralkart provides ongoing AI development and software solutions, tackling complex data extraction use cases.
              </p>
            </div>
            <div style={{
              marginBottom: '0',
              position: 'relative',
              zIndex: 3,
              textAlign: 'left'
            }}>
              <h4 style={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: '#333',
                position: 'relative',
                zIndex: 3
              }}>
                <span style={{
                  color: '#14bef0',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 3
                }}>Outcome:</span>
              </h4>
              <p style={{
                margin: '0',
                color: '#555',
                position: 'relative',
                zIndex: 3,
                fontSize: '1.05rem',
                lineHeight: '1.6'
              }}>
                Enabling Chola MS to innovate faster and enhance operational efficiency through our dedicated AI and software expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="neuralkart-about-section" style={{ padding: '100px 20px', backgroundColor: '#f8f9fa', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 3 }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#333', 
          marginBottom: '1rem',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          The Neuralkart Edge
        </h2>
      </div>
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 5,
          textAlign: 'center'
        }}
      >
        <p style={{ marginBottom: '15px', lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
          Neuralkart was founded with the vision to bring cutting-edge AI into the heart of the insurance industry. We are a team of passionate technologists, data scientists, and insurance domain enthusiasts committed to building solutions that are not only intelligent but also practical and impactful.
        </p>
        <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
          Our focus is on creating a future where insurance is more efficient, accurate, and customer-centric through the power of artificial intelligence.
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="neuralkart-home">
      <HomeNavbar />
      <HomeHero />
      <ChallengeSection />
      <ProductsSection />
      <InnovationSection />
      <ServicesSection />
      <ClientSuccessSection />
      <AboutSection />
      <Contact />
      <HomeFooter />
    </div>
  );
};

export default Home; 