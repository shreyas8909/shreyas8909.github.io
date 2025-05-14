import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import HomeHero from '../HomeHero/HomeHero';
import HomeFooter from '../HomeFooter/HomeFooter';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaShieldAlt, FaCode, FaBrain, FaUserTie, FaHourglass, FaQuestionCircle, FaFileAlt, FaCheckCircle, FaSearch, FaClock, FaCreditCard, FaExclamationCircle, FaHandshake, FaUsers, FaLinkedin, FaLightbulb, FaDatabase, FaArrowRight, FaQuoteLeft, FaQuoteRight, FaChevronDown } from 'react-icons/fa';
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
    <section id="products" style={{ 
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #f5f9fc 0%, #ffffff 100%)',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20, 190, 240, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(40, 50, 140, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '80px', 
        position: 'relative', 
        zIndex: 3 
      }}>
        <span style={{
          fontWeight: 500,
          color: '#14bef0',
          display: 'block',
          marginBottom: '15px',
          fontSize: '1.2rem',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>Our Solutions</span>
        <h2 style={{ 
          fontSize: '3.2rem', 
          fontWeight: '800',
          margin: '0 auto 25px',
          maxWidth: '800px',
          color: '#333', 
          lineHeight: '1.2',
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
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(to right, #14bef0, #28328c)',
          margin: '0 auto 25px',
          borderRadius: '4px'
        }}></div>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.8'
        }}>
          Cutting-edge AI solutions designed to transform insurance operations with intelligence and efficiency.
        </p>
      </div>
      
      {/* Underwriting Product */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 100px',
        position: 'relative',
        zIndex: 3 
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(20, 190, 240, 0.07)',
          position: 'relative',
          zIndex: 3,
          flexDirection: window.innerWidth <= 1024 ? 'column' : 'row',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          border: '1px solid rgba(20, 190, 240, 0.1)'
        }}>
          <div style={{
            padding: '60px 50px',
            flex: '1',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{ marginBottom: '40px' }}>
              <span style={{
                background: 'linear-gradient(45deg, #14bef0, #28328c)',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '20px',
                boxShadow: '0 8px 15px rgba(20, 190, 240, 0.2)'
              }}>Flagship Product</span>
              <h3 style={{
                fontSize: '2.4rem',
                marginBottom: '15px',
                color: '#28328c',
                fontWeight: '700',
                position: 'relative',
                zIndex: 3,
                lineHeight: '1.2'
              }}>AI-Driven Medical Underwriting Automation</h3>
              <p style={{
                fontSize: '1.25rem',
                color: '#14bef0',
                fontWeight: '500',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 3
              }}>Streamlining Medical Underwriting. Enhancing Accuracy.</p>
            </div>
            <div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaSearch />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Clinical Insight Extraction</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Automatically extracts and analyzes critical clinical insights from diverse diagnostic documents.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Guideline Compliance</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Intelligently checks data against underwriting guidelines, instantly flagging discrepancies and risks.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaClock />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Reduced Manual Review</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Significantly cuts down manual review time, empowering underwriters to focus on complex cases.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '0',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaChartLine />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Improved Decision Accuracy</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Enhances the precision of underwriting decisions through consistent, data-driven analysis.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minHeight: window.innerWidth <= 768 ? '300px' : '500px',
            position: 'relative',
            zIndex: 2,
            order: window.innerWidth <= 1024 ? '-1' : '0',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(20, 190, 240, 0.8), rgba(40, 50, 140, 0.9))',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Decorative elements inside image area */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.1)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3Cpattern id=\'grid\' width=\'50\' height=\'50\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'50\' height=\'50\' fill=\'url(%23smallGrid)\'/%3E%3Cpath d=\'M 50 0 L 0 0 0 50\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.15)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\' /%3E%3C/svg%3E")',
                opacity: 0.4
              }}></div>
              <div style={{
                position: 'relative',
                zIndex: 3,
                fontSize: '3rem',
                color: 'white',
                opacity: 0.9
              }}>
                <FaRobot style={{ fontSize: '120px', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Claims Processing Product */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 40px',
        position: 'relative',
        zIndex: 3 
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(20, 190, 240, 0.07)',
          position: 'relative',
          zIndex: 3,
          flexDirection: window.innerWidth <= 1024 ? 'column' : 'row-reverse',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          border: '1px solid rgba(20, 190, 240, 0.1)'
        }}>
          <div style={{
            padding: '60px 50px',
            flex: '1',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{ marginBottom: '40px' }}>
              <span style={{
                background: 'linear-gradient(45deg, #28328c, #14bef0)',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '20px',
                boxShadow: '0 8px 15px rgba(40, 50, 140, 0.2)'
              }}>Core Solution</span>
              <h3 style={{
                fontSize: '2.4rem',
                marginBottom: '15px',
                color: '#28328c',
                fontWeight: '700',
                position: 'relative',
                zIndex: 3,
                lineHeight: '1.2'
              }}>Automated Claims Processing</h3>
              <p style={{
                fontSize: '1.25rem',
                color: '#14bef0',
                fontWeight: '500',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 3
              }}>Accelerating Claims. Reducing Fraud. Improving Outcomes.</p>
            </div>
            <div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(40, 50, 140, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#28328c',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaFileAlt />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Automated Data Extraction</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Seamlessly extracts and processes critical information from claims documentation with high accuracy.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(40, 50, 140, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#28328c',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaExclamationCircle />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Intelligent Fraud Detection</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Advanced algorithms identify suspicious patterns and anomalies, significantly reducing fraud instances.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '25px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(40, 50, 140, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#28328c',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaCreditCard />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Faster Claims Settlement</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Dramatically reduces processing time, enabling faster settlements and improved customer satisfaction.</p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginBottom: '0',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(40, 50, 140, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#28328c',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaChartLine />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    color: '#333',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>Reduced Operational Costs</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6'
                  }}>Optimizes resources by automating repetitive tasks, leading to significant operational savings.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minHeight: window.innerWidth <= 768 ? '300px' : '500px',
            position: 'relative',
            zIndex: 2,
            order: window.innerWidth <= 1024 ? '-1' : '0',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(40, 50, 140, 0.8), rgba(20, 190, 240, 0.9))',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Decorative elements inside image area */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'15\' height=\'15\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'7.5\' cy=\'7.5\' r=\'1\' fill=\'rgba(255, 255, 255, 0.3)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\' /%3E%3C/svg%3E")',
                opacity: 0.6
              }}></div>
              <div style={{
                position: 'relative',
                zIndex: 3,
                fontSize: '3rem',
                color: 'white',
                opacity: 0.9
              }}>
                <FaFileAlt style={{ fontSize: '120px', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InnovationSection = () => {
  return (
    <section id="innovation" style={{ 
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #f8fbff 0%, #f2f7fc 100%)',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20, 190, 240, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(40, 50, 140, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '80px', 
        position: 'relative', 
        zIndex: 3 
      }}>
        <span style={{
          fontWeight: 500,
          color: '#14bef0',
          display: 'block',
          marginBottom: '15px',
          fontSize: '1.2rem',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>Pioneering Technology</span>
        <h2 style={{ 
          fontSize: '3.2rem', 
          fontWeight: '800',
          margin: '0 auto 25px',
          maxWidth: '800px',
          color: '#333', 
          lineHeight: '1.2',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Innovation at Neuralkart: Beyond Conventional Solutions
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(to right, #14bef0, #28328c)',
          margin: '0 auto 25px',
          borderRadius: '4px'
        }}></div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: window.innerWidth <= 992 ? 'column' : 'row',
        alignItems: 'center',
        gap: '50px'
      }}>
        <div style={{
          flex: '1',
          maxWidth: window.innerWidth <= 992 ? '100%' : '50%',
          position: 'relative'
        }}>
          <div style={{
            position: 'relative',
            zIndex: 2,
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
            aspectRatio: '4/3',
            background: 'linear-gradient(135deg, rgba(20, 190, 240, 0.9), rgba(40, 50, 140, 0.95))',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'gridPattern\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'20\' height=\'20\' fill=\'none\'/%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.1)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23gridPattern)\' /%3E%3C/svg%3E")',
              opacity: 0.7,
              zIndex: 1
            }}></div>
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '70%',
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center'
            }}>
              <FaLightbulb style={{ fontSize: '80px', marginBottom: '30px', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }} />
              <h3 style={{ 
                fontSize: '2.6rem', 
                fontWeight: '700', 
                marginBottom: '20px',
                filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))'
              }}>Innovation Hub</h3>
              <p style={{ 
                fontSize: '1.2rem', 
                fontWeight: '400',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>Where AI research meets practical insurance solutions</p>
            </div>
          </div>
        </div>
        
        <div style={{
          flex: '1',
          maxWidth: window.innerWidth <= 992 ? '100%' : '50%',
          position: 'relative',
          zIndex: 3
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.97)',
            borderRadius: '24px',
            padding: '50px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(20, 190, 240, 0.07)',
            position: 'relative',
            zIndex: 3,
            border: '1px solid rgba(20, 190, 240, 0.1)'
          }}>
            <h3 style={{
              fontSize: '2.2rem',
              marginBottom: '25px',
              color: '#28328c',
              fontWeight: '700',
              lineHeight: '1.3'
            }}>Research-Driven Innovation</h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              marginBottom: '30px',
              lineHeight: '1.8'
            }}>
              At Neuralkart, innovation isn't just a buzzword—it's the foundation of everything we build. Our dedicated research team continuously explores the frontiers of AI, machine learning, and data science to develop groundbreaking solutions for the insurance industry.
            </p>
            
            <div style={{ marginBottom: '35px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0,
                  marginTop: '5px'
                }}>
                  <FaBrain />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    color: '#333',
                    fontWeight: '600'
                  }}>Advanced Neural Networks</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    lineHeight: '1.7'
                  }}>Our proprietary deep learning models achieve industry-leading accuracy in medical document analysis and risk assessment.</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0,
                  marginTop: '5px'
                }}>
                  <FaDatabase />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    color: '#333',
                    fontWeight: '600'
                  }}>Continuous Learning Systems</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    lineHeight: '1.7'
                  }}>Our AI models continuously improve through ongoing exposure to new data, ensuring ever-increasing accuracy and effectiveness.</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0,
                  marginTop: '5px'
                }}>
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    color: '#333',
                    fontWeight: '600'
                  }}>Responsible AI Development</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#666',
                    lineHeight: '1.7'
                  }}>We prioritize ethical considerations in AI, ensuring our solutions remain transparent, unbiased, and compliant with all regulations.</p>
                </div>
              </div>
            </div>
            
            <div style={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                background: 'linear-gradient(45deg, #14bef0, #28328c)',
                padding: '15px 30px',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 10px 20px rgba(20, 190, 240, 0.3)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <span>Explore our research</span>
                <FaArrowRight style={{ fontSize: '0.9rem' }} />
              </div>
            </div>
          </div>
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
    <section id="case-studies" style={{ 
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20, 190, 240, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(40, 50, 140, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: 1
      }}></div>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '80px', 
        position: 'relative', 
        zIndex: 3 
      }}>
        <span style={{
          fontWeight: 500,
          color: '#14bef0',
          display: 'block',
          marginBottom: '15px',
          fontSize: '1.2rem',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>Success Stories</span>
        <h2 style={{ 
          fontSize: '3.2rem', 
          fontWeight: '800',
          margin: '0 auto 25px',
          maxWidth: '800px',
          color: '#333', 
          lineHeight: '1.2',
          display: 'inline-block',
          background: 'linear-gradient(45deg, #14bef0, #28328c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 3
        }}>
          Client Success: Transforming Insurance Operations
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(to right, #14bef0, #28328c)',
          margin: '0 auto 25px',
          borderRadius: '4px'
        }}></div>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.8'
        }}>
          Real-world results that demonstrate the power of our AI solutions in action
        </p>
      </div>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 992 ? 'column' : 'row',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(20, 190, 240, 0.07)',
          position: 'relative',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          border: '1px solid rgba(20, 190, 240, 0.1)'
        }}>
          <div style={{
            padding: '60px 50px',
            flex: window.innerWidth <= 992 ? 'none' : '1',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '40px',
              justifyContent: window.innerWidth <= 992 ? 'center' : 'flex-start'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #fff, #f5f9fc)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid rgba(20, 190, 240, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}>
                <img 
                  src="https://www.cholainsurance.com/o/chola-corporate-theme/images/logo.png" 
                  alt="Cholamandalam MS Logo"
                  style={{ 
                    height: '60px',
                    display: 'block'
                  }}
                />
              </div>
            </div>
            
            <h3 style={{
              fontSize: '2.4rem',
              marginBottom: '20px',
              color: '#28328c',
              fontWeight: '700',
              position: 'relative',
              zIndex: 3,
              lineHeight: '1.2',
              textAlign: window.innerWidth <= 992 ? 'center' : 'left'
            }}>Cholamandalam MS: Revolutionizing Claims Processing</h3>
            
            <div style={{ 
              padding: '25px 35px',
              backgroundColor: 'rgba(20, 190, 240, 0.05)',
              borderRadius: '16px',
              marginBottom: '35px',
              border: '1px solid rgba(20, 190, 240, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#14bef0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  <FaQuestionCircle />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    color: '#28328c',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>The Challenge</h4>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Manual claims processing was causing delays and increasing operational costs
                  </p>
                </div>
              </div>
            </div>
            
            <h4 style={{
              fontSize: '1.5rem',
              color: '#14bef0',
              fontWeight: '600',
              marginBottom: '25px',
              textAlign: window.innerWidth <= 992 ? 'center' : 'left'
            }}>Our Solution</h4>
            
            <div style={{
              marginBottom: '35px'
            }}>
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6',
                    margin: 0
                  }}>Implemented <strong style={{ color: '#28328c' }}>AI-powered claims processing</strong> to automate document analysis</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6',
                    margin: 0
                  }}>Integrated <strong style={{ color: '#28328c' }}>fraud detection algorithms</strong> to identify suspicious patterns</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                marginBottom: '0',
                position: 'relative',
                zIndex: 3
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 190, 240, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#14bef0',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <FaCheckCircle />
                </div>
                <div>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    position: 'relative',
                    zIndex: 3,
                    lineHeight: '1.6',
                    margin: 0
                  }}>Created <strong style={{ color: '#28328c' }}>custom workflows</strong> to streamline approval processes</p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(40, 50, 140, 0.05)',
              borderRadius: '16px',
              padding: '30px',
              marginTop: '40px',
              border: '1px solid rgba(40, 50, 140, 0.1)'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                color: '#28328c',
                fontWeight: '600',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <FaChartLine style={{ color: '#14bef0' }} />
                Results
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
                gap: '25px'
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)'
                }}>
                  <h5 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#14bef0',
                    margin: '0 0 10px 0'
                  }}>73%</h5>
                  <p style={{
                    fontSize: '1rem',
                    color: '#555',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>Reduction in processing time</p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)'
                }}>
                  <h5 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#14bef0',
                    margin: '0 0 10px 0'
                  }}>42%</h5>
                  <p style={{
                    fontSize: '1rem',
                    color: '#555',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>Decrease in operational costs</p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)'
                }}>
                  <h5 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#14bef0',
                    margin: '0 0 10px 0'
                  }}>31%</h5>
                  <p style={{
                    fontSize: '1rem',
                    color: '#555',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>Reduction in fraud incidents</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            flex: window.innerWidth <= 992 ? 'none' : '0.7',
            minHeight: window.innerWidth <= 768 ? '300px' : '600px',
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(20, 190, 240, 0.8), rgba(40, 50, 140, 0.9))',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              textAlign: 'center'
            }}>
              {/* Decorative elements inside image area */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.1)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3Cpattern id=\'grid\' width=\'50\' height=\'50\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'50\' height=\'50\' fill=\'url(%23smallGrid)\'/%3E%3Cpath d=\'M 50 0 L 0 0 0 50\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.15)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\' /%3E%3C/svg%3E")',
                opacity: 0.4
              }}></div>
              
              <div style={{
                position: 'relative',
                zIndex: 3,
                width: '90%',
                maxWidth: '450px'
              }}>
                <div style={{ marginBottom: '30px' }}>
                  <FaQuoteLeft style={{ fontSize: '60px', color: 'rgba(255, 255, 255, 0.2)' }} />
                </div>
                
                <p style={{ 
                  fontSize: '1.5rem', 
                  color: 'white', 
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                  marginBottom: '40px'
                }}>
                  Neuralkart's AI solution has transformed our claims processing, enabling us to serve our customers faster while significantly reducing operational costs.
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    marginRight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}>
                    <FaUserTie style={{ fontSize: '30px', color: '#28328c' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h5 style={{ 
                      color: 'white', 
                      margin: '0 0 5px 0',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>Rajesh Kumar</h5>
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      margin: 0,
                      fontSize: '0.95rem'
                    }}>CTO, Cholamandalam MS</p>
                  </div>
                </div>
              </div>
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

const Hero = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fbff 0%, #f1f8fd 100%)',
      position: 'relative',
      padding: '120px 20px 80px',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(20, 190, 240, 0.05) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 80% 70%, rgba(40, 50, 140, 0.05) 0%, rgba(255, 255, 255, 0) 50%)',
        zIndex: 1
      }}></div>
      
      {/* Animated particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5,
        zIndex: 1
      }}>
        {Array.from({ length: 25 }).map((_, index) => (
          <div key={index} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            borderRadius: '50%',
            backgroundColor: index % 2 === 0 ? '#14bef0' : '#28328c',
            opacity: Math.random() * 0.5 + 0.3,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 1
          }}></div>
        ))}
      </div>
      
      {/* Main content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: window.innerWidth <= 992 ? 'column' : 'row',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          flex: '1',
          padding: '40px',
          position: 'relative', 
          zIndex: 3,
          order: window.innerWidth <= 992 ? 2 : 1
        }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(20, 190, 240, 0.08)',
            color: '#14bef0',
            padding: '8px 20px',
            borderRadius: '30px',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '25px',
            letterSpacing: '0.5px',
            border: '1px solid rgba(20, 190, 240, 0.2)',
            boxShadow: '0 3px 10px rgba(20, 190, 240, 0.08)'
          }}>INSURTECH INNOVATION</span>
          
          <h1 style={{ 
            fontSize: window.innerWidth <= 768 ? '2.8rem' : '3.8rem', 
            fontWeight: '800', 
            marginBottom: '30px',
            lineHeight: '1.2',
            color: '#28328c',
            position: 'relative',
            zIndex: 3,
            textShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}>
            <span style={{ display: 'block' }}>
              Transforming Insurance
            </span>
            <span style={{
              background: 'linear-gradient(45deg, #14bef0, #28328c)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 3
            }}>
              with AI Excellence
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.8', 
            marginBottom: '40px', 
            color: '#555',
            position: 'relative',
            zIndex: 3,
            maxWidth: '600px'
          }}>
            Advanced AI solutions streamlining insurance processes. Our powerful technology delivers precision, efficiency, and innovation to insurers and TPA's tackling complex challenges.
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            position: 'relative', 
            zIndex: 3,
            marginBottom: '50px'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #14bef0, #28328c)',
              padding: '15px 35px',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 12px 25px rgba(20, 190, 240, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>Request Demo</span>
              <FaArrowRight style={{ fontSize: '0.9rem' }} />
            </div>
            
            <div style={{
              background: 'transparent',
              padding: '15px 35px',
              borderRadius: '50px',
              color: '#28328c',
              fontWeight: '600',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease, transform 0.3s ease',
              border: '2px solid #14bef0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 5px 15px rgba(20, 190, 240, 0.1)'
            }}>
              <span>Learn More</span>
              <FaChevronDown style={{ fontSize: '0.9rem' }} />
            </div>
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
            marginTop: '30px',
            position: 'relative',
            zIndex: 3
          }}>
            <span style={{
              fontSize: '0.9rem',
              color: '#666',
              marginRight: '20px',
              fontWeight: '500'
            }}>Trusted By:</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '25px'
            }}>
              <div style={{ 
                opacity: 0.75,
                transition: 'opacity 0.3s ease',
                filter: 'grayscale(0.5)'
              }}>
                <img 
                  src="https://www.cholainsurance.com/o/chola-corporate-theme/images/logo.png" 
                  alt="Cholamandalam MS Logo"
                  style={{ height: '30px' }}
                />
              </div>
              
              {/* <div style={{ 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                color: '#28328c', 
                opacity: 0.75,
                filter: 'grayscale(0.5)' 
              }}>
                Leading Insurers
              </div> */}
            </div>
          </div>
        </div>
        
        <div style={{ 
          flex: '1',
          position: 'relative',
          zIndex: 2,
          marginBottom: window.innerWidth <= 992 ? '30px' : '0',
          order: window.innerWidth <= 992 ? 1 : 2,
          padding: '40px'
        }}>
          <div style={{
            width: '100%',
            height: '500px',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15), 0 15px 30px rgba(20, 190, 240, 0.12)',
            background: 'linear-gradient(135deg, rgba(20, 190, 240, 0.95), rgba(40, 50, 140, 0.98))',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Grid pattern background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'gridPattern\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'20\' height=\'20\' fill=\'none\'/%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.12)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23gridPattern)\' /%3E%3C/svg%3E")',
              opacity: 0.4,
              zIndex: 1
            }}></div>
            
            <div style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80%'
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                border: '4px solid rgba(255, 255, 255, 0.25)',
                animation: 'pulse 4s infinite ease-in-out'
              }}>
                <FaRobot style={{ 
                  fontSize: '80px', 
                  color: 'white',
                  filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))'
                }} />
              </div>
              
              <h2 style={{
                color: 'white',
                fontSize: '2.6rem',
                fontWeight: '700',
                marginBottom: '25px',
                textAlign: 'center',
                lineHeight: '1.2',
                filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))'
              }}>
                AI Copilot for Insurance
              </h2>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.2rem',
                textAlign: 'center',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                Our flagship solution processes insurance documents with unmatched precision and efficiency
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
              }}>
                {/* <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50px',
                  padding: '12px 30px',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                }}>
                  <span>Explore Features</span>
                  <FaArrowRight style={{ fontSize: '0.8rem' }} />
                </div> */}
              </div>
              
              {/* Floating document elements */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '8px',
                top: '15%',
                left: '10%',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'rotate(-10deg)',
                zIndex: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'float 8s infinite ease-in-out'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '6px', 
                  backgroundColor: '#14bef0', 
                  marginBottom: '10px',
                  borderRadius: '3px'
                }}></div>
                <div style={{ 
                  width: '40px', 
                  height: '6px', 
                  backgroundColor: '#14bef0',
                  opacity: 0.7,
                  marginBottom: '10px',
                  borderRadius: '3px'
                }}></div>
                <div style={{ 
                  width: '30px', 
                  height: '6px', 
                  backgroundColor: '#14bef0',
                  opacity: 0.4,
                  borderRadius: '3px'
                }}></div>
              </div>
              
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '8px',
                bottom: '15%',
                right: '10%',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'rotate(10deg)',
                zIndex: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'float 7s infinite ease-in-out reverse'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '6px', 
                  backgroundColor: '#28328c', 
                  marginBottom: '10px',
                  borderRadius: '3px'
                }}></div>
                <div style={{ 
                  width: '40px', 
                  height: '6px', 
                  backgroundColor: '#28328c',
                  opacity: 0.7,
                  marginBottom: '10px',
                  borderRadius: '3px'
                }}></div>
                <div style={{ 
                  width: '30px', 
                  height: '6px', 
                  backgroundColor: '#28328c',
                  opacity: 0.4,
                  borderRadius: '3px'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Stats cards beneath hero image */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: '30px',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              flex: '1',
              marginRight: '15px',
              textAlign: 'center',
              border: '1px solid rgba(20, 190, 240, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '2.2rem',
                display: 'flex',
                justifyContent: 'center',
                fontWeight: '700',
                margin: '0 0 5px 0',
                background: 'linear-gradient(45deg, #14bef0, #14bef0)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>98%</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                margin: 0
              }}>Accuracy Rate</p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              flex: '1',
              textAlign: 'center',
              border: '1px solid rgba(40, 50, 140, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'center',
                margin: '0 0 5px 0',
                background: 'linear-gradient(45deg, #28328c, #28328c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>70%</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                margin: 0
              }}>Time Saved</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '10px'
        }}>Scroll down</p>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid #14bef0',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px 0'
        }}>
          <div style={{
            width: '6px',
            height: '10px',
            backgroundColor: '#14bef0',
            borderRadius: '3px',
            animation: 'scroll 2s infinite',
            marginTop: '5px'
          }}></div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0) rotate(-10deg);
            }
            50% {
              transform: translateY(-20px) translateX(10px) rotate(-5deg);
            }
            100% {
              transform: translateY(0) translateX(0) rotate(-10deg);
            }
          }
          
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(15px);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
          }
        `}
      </style>
    </section>
  );
};

const Home = () => {
  return (
    <div className="neuralkart-home">
      <HomeNavbar />
      <Hero />
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