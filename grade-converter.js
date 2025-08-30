        const questions = [
            {
                id: 1,
                text: "What is your ethnicity?",
				type: "multiple",
				options: [
					{ text: "Caucasian", weight: -20 },
					{ text: "Asian", weight: 0 },
					{ text: "African", weight: -80 }
				]
            },
            {
                id: 2,
                text: "Are you a single father?",
                type: "yesno",
                weight: -150
            },
            {
                id: 3,
                text: "Are you previously divorced?",
                type: "yesno",
                weight: -10
            },
            {
                id: 4,
                text: "What is your age?",
                type: "numerical",
                unit: "years",
                ranges: [
                    { min: 0, max: 14, weight: -1000, label: "Instant disqualification 🥀" },
                    { min: 15, max: 19, weight: -20, label: "Hate to break it but cool age so ur good" },
                    { min: 20, max: 24, weight: -5, label: "Cool age ur good" },
                    { min: 25, max: 29, weight: 5, label: "Cool age ur good" },
                    { min: 30, max: 39, weight: 20, label: "Exquisite age brewed just right" },
                    { min: 40, max: 100, weight: -1000, label: "Instant disqualification 🥀" }
                ]
            },
			{
                id: 5,
                text: "Do you have mental issues?",
                type: "yesno",
                weight: -50
            },
			{
                id: 6,
                text: "Do you have a criminal record?",
                type: "yesno",
                weight: -300
            },
			{
                id: 7,
                text: "What eyelids do you have?",
                type: "multiple",
				options: [
					{ text: "Single", weight: -40 },
					{ text: "Double", weight: 0 }
				]
            },
			{
				id: 8,
				text: "What muscle type do you have?",
				type: "multiple",
				options: [
					{ text: "Muscular", weight: 30 },
					{ text: "Shredded", weight: -15 },
					{ text: "Lean", weight: -5 },
					{ text: "Soft", weight: 5 }
				]
			},
			{
				id: 9,
				text: "On a scale of 0 to 6, how attractive do you think you are?",
				type: "multiple",
				options: [
					{ text: "1", weight: -200 },
					{ text: "2", weight: -80 },
					{ text: "3", weight: -20 },
					{ text: "4", weight: 20 },
					{ text: "5", weight: 40 },
					{ text: "6", weight: 50 }
				]
			},
            {
                id: 10,
                text: "What is your height?",
                type: "numerical",
                unit: "cm",
                ranges: [
                    { min: 0, max: 164, weight: -1000, label: "Instant disqualification 🥀" },
                    { min: 165, max: 169, weight: -50, label: "Dawg ur not tall enough" },
                    { min: 170, max: 175, weight: -30, label: "Still not tall enough" },
                    { min: 176, max: 178, weight: -10, label: "Still nah ur short" },
					{ min: 179, max: 182, weight: 20, label: "Ok good height" },
					{ min: 182, max: 210, weight: 30, label: "Dawg thats tall tho 🔥" }
                ]
            },
			{
				id: 11,
				text: "What colour are your nipples?",
				type: "multiple",
				options: [
					{ text: "Dark", weight: 5 },
					{ text: "Purple/ Medium", weight: -3 },
					{ text: "Pink/ Light", weight: 0 }
				]
			},
			{
				id: 12,
				text: "How much body hair do you have?",
				type: "multiple",
				options: [
					{ text: "Normal", weight: 30 },
					{ text: "None/ Little", weight: -200 },
					{ text: "Excessive", weight: -1000 }
				]
			},
			{
				id: 13,
				text: "Do you have Abs?",
				type: "multiple",
				options: [
					{ text: "No", weight: 0 },
					{ text: "Six-pack", weight: 10 }
				]
			},
			{
                id: 14,
                text: "Do you have Biceps?",
                type: "yesno",
                weight: 15
            },
			{
                id: 15,
                text: "Do you have a happy trail? (Hair on the middle of your chest)",
                type: "yesno",
                weight: 5
            },
			{
                id: 16,
                text: "Are your armpits shaved?",
                type: "yesno",
                weight: -5
            },
			{
                id: 17,
                text: "Do you have pubic hair?",
                type: "yesno",
                weight: -20
            },
			{
				id: 18,
				text: "What is your eye colour?",
				type: "multiple",
				options: [
					{ text: "Blue", weight: -2 },
					{ text: "Brown", weight: -2 },
					{ text: "Green", weight: 0 }
				]
			},
			{
				id: 19,
				text: "What is your hair colour?",
				type: "multiple",
				options: [
					{ text: "Black", weight: 10 },
					{ text: "White", weight: 0 },
					{ text: "Gray", weight: 0 },
					{ text: "Blode", weight: -5 },
					{ text: "Other shades", weight: -10 }
				]
			},
			{
                id: 20,
                text: "What is the length for your male genitalia? (in cm)",
                type: "numerical",
                unit: "cm",
                ranges: [
                    { min: 0, max: 8, weight: -50},
                    { min: 9, max: 10, weight: -40, label: "Ok" },
                    { min: 11, max: 12, weight: -10, label: "Cool" },
                    { min: 13, max: 15, weight: 20, label: "Stop capping" },
					{ min: 16, max: 250, weight: 25, label: "Nah stop capping" }
                ]
            },
			{
                id: 21,
                text: "Do you have a deep voice?",
                type: "yesno",
                weight: 20
            },
			{
				id: 22,
				text: "What skin colour do you have?",
				type: "multiple",
				options: [
					{ text: "Dark", weight: 10 },
					{ text: "White", weight: -5 },
					{ text: "Other shades", weight: 0 }
				]
			},
			{
				id: 23,
				text: "What is your obesity level?",
				type: "multiple",
				options: [
					{ text: "Healthy/ Underweight", weight: 0 },
					{ text: "Overweight", weight: -50 },
					{ text: "Obese", weight: -100 },
					{ text: "Seriously Obese", weight: -500 }
				]
			},
			{
                id: 24,
                text: "Do you wear glasses?",
                type: "yesno",
                weight: -5
            },
			{
				id: 25,
				text: "Do you have facial hair?",
				type: "multiple",
				options: [
					{ text: "Some", weight: 5 },
					{ text: "None", weight: 0 },
					{ text: "Excessive", weight: -15 }
				]
			},
			{
                id: 26,
                text: "Do you have any type of chronic disease?",
                type: "yesno",
                weight: -50
            },
			{
                id: 27,
                text: "Do you think you are gentle?",
                type: "yesno",
                weight: 15
            },
			{
                id: 28,
                text: "Are you wealthy?",
                type: "yesno",
                weight: 40
            },
			{
                id: 29,
                text: "Are you straight?",
                type: "yesno",
                weight: -50
            },
			{
                id: 30,
                text: "Are you Bilingual?",
                type: "yesno",
                weight: 10
            },
			{
                id: 31,
                text: "Are you caring?",
                type: "yesno",
                weight: 5
            },
			{
                id: 32,
                text: "Will you do aftercare? (Pamper your partner after intercourse)",
                type: "yesno",
                weight: 20
            },
			{
                id: 33,
                text: "Are you obsessive?",
                type: "yesno",
                weight: -40
            },
			{
                id: 34,
                text: "Do you like alcohol?",
                type: "yesno",
                weight: 5
            },
			{
                id: 35,
                text: "Do you like cosplay?",
                type: "yesno",
                weight: 60
            },
			{
                id: 36,
                text: "Do you like cooking?",
                type: "yesno",
                weight: 5
            },
			{
                id: 37,
                text: "Do you like basketball?",
                type: "yesno",
                weight: 25
            },
			{
                id: 38,
                text: "Do you like gambling?",
                type: "yesno",
                weight: -200
            },
			{
                id: 39,
                text: "Do you wish to become/ are you a firefighter?",
                type: "yesno",
                weight: 20
            },
			{
                id: 40,
                text: "Do you wish to become/ are you a teacher?",
                type: "yesno",
                weight: 50
            },
			{
                id: 41,
                text: "Do you wish to become/ are you a fitness couch?",
                type: "yesno",
                weight: 40
            }
        ];

        const gradeBoundaries = {
			71.4286: 'S', //400
			67.8571: 'A++', //380
			62.5: 'A+', //350
            53.5714: 'A', //300
            44.6429: 'B', //250
			35.7143: 'C+', //200
            26.7857: 'C', //150
            17.8571: 'D', //100
            0: 'F',
            '-100': 'U'
        };

        // Store calculation results for export
        let lastCalculationResult = null;

        // Initialize the calculator
        function initializeCalculator() {
            const container = document.getElementById('questions-container');
            
            questions.forEach(question => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-item';
                
                if (question.type === 'numerical') {
                    questionDiv.innerHTML = `
                        <div class="question-text">${question.text}</div>
                        <div class="question-weight" id="weight_${question.id}">Range-based scoring (see ranges below)</div>
                        <div class="numerical-input-group">
                            <input type="number" 
                                   id="num_${question.id}" 
                                   name="question_${question.id}" 
                                   placeholder="Enter ${question.unit}"
                                   min="0"
                                   step="1">
                            <span class="unit-label">${question.unit}</span>
                        </div>
                        <div class="ranges-info" id="ranges_${question.id}">
                            <strong>Scoring Ranges:</strong>
                            ${question.ranges.map(range => `
                                <div class="range-item ${range.weight >= 0 ? 'positive' : 'negative'}">
                                    ${range.label}: <strong>${range.weight > 0 ? '+' : ''}${range.weight} points</strong>
                                </div>
                            `).join('')}
                        </div>
                        <div class="current-score" id="score_${question.id}" style="display: none;"></div>
                    `;
                } else if (question.type === 'yesno') {
                    // Original yes/no questions
                    questionDiv.innerHTML = `
                        <div class="question-text">${question.text}</div>
                        <div class="question-weight" id="weight_${question.id}">Weight: ${question.weight} points</div>
                        <div class="radio-group">
                            <div class="radio-option">
                                <input type="radio" id="yes_${question.id}" name="question_${question.id}" value="yes">
                                <label for="yes_${question.id}">Yes</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="no_${question.id}" name="question_${question.id}" value="no">
                                <label for="no_${question.id}">No</label>
                            </div>
                        </div>
                    `;
				} else if (question.type === 'multiple') {
					questionDiv.innerHTML = `
						<div class="question-text">${question.text}</div>
						<div class="question-weight" id="weight_${question.id}">Option-based scoring</div>
						<div class="radio-group">
							${question.options.map((opt, index) => `
								<div class="radio-option">
									<input type="radio" 
										id="opt_${question.id}_${index}" 
										name="question_${question.id}" 
										value="${index}">
									<label for="opt_${question.id}_${index}">${opt.text}</label>
								</div>
							`).join('')}
						</div>
					`;
				}

                
                container.appendChild(questionDiv);
            });
            
            // Add event listeners for numerical inputs
            questions.forEach(question => {
                if (question.type === 'numerical') {
                    const input = document.getElementById(`num_${question.id}`);
                    const scoreDisplay = document.getElementById(`score_${question.id}`);
                    
                    input.addEventListener('input', function() {
                        updateNumericalScore(question, this.value, scoreDisplay);
                    });
                }
            });
        }

        // Update numerical score display
        function updateNumericalScore(question, value, scoreDisplay) {
            const numValue = parseFloat(value);
            
            // Hide score display if input is empty
            if (value === '' || isNaN(numValue)) {
                scoreDisplay.style.display = 'none';
                return;
            }
            
            // Validate input
            if (numValue < 0 || numValue > 1000) {
                scoreDisplay.style.display = 'block';
                scoreDisplay.textContent = 'Invalid input (must be 0-1000)';
                scoreDisplay.className = 'current-score negative';
                return;
            }
            
            // Find matching range
            const matchingRange = question.ranges.find(range => 
                numValue >= range.min && numValue <= range.max
            );
            
            if (matchingRange) {
                scoreDisplay.style.display = 'block';
                scoreDisplay.textContent = `${matchingRange.label}`;
                scoreDisplay.className = `current-score ${
                    matchingRange.weight > 0 ? 'positive' : 
                    matchingRange.weight < 0 ? 'negative' : 'neutral'
                }`;
            } else {
                scoreDisplay.style.display = 'block';
                scoreDisplay.textContent = 'Value out of range';
                scoreDisplay.className = 'current-score negative';
            }
        }

        // Get numerical question score
        function getNumericalScore(question) {
            const input = document.getElementById(`num_${question.id}`);
            const value = parseFloat(input.value);
            
            // Return 0 if empty or invalid
            if (!input.value || isNaN(value) || value < 0 || value > 1000) {
                return 0;
            }
            
            // Find matching range
            const matchingRange = question.ranges.find(range => 
                value >= range.min && value <= range.max
            );
            
            return matchingRange ? matchingRange.weight : 0;
        }

        function calculateScore() {
            let totalScore = 0;
            let totalPositiveWeight = 560;
            let totalNegativeWeight = 0;
            let answeredQuestions = 0;
            let detailedAnswers = [];

            questions.forEach(question => {
                let answered = false;
                let earnedScore = 0;
                let answerText = '';

                if (question.type === 'numerical') {
                    const input = document.getElementById(`num_${question.id}`);
                    if (input.value && input.value.trim() !== '') {
                        answered = true;
                        earnedScore = getNumericalScore(question);
                        answerText = `${input.value} ${question.unit}`;
                    }
                } else {
                    const radioButtons = document.getElementsByName(`question_${question.id}`);
                    const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
                    
                    if (selectedRadio) {
                        answered = true;
                        answerText = selectedRadio.value.charAt(0).toUpperCase() + selectedRadio.value.slice(1);
                        if (selectedRadio.value === 'yes') {
                            earnedScore = question.weight;
                        }
                    } else if (question.type === 'multiple') {
						const selectedOption = Array.from(document.getElementsByName(`question_${question.id}`))
									.find(opt => opt.checked);

						if (selectedOption) {
							answered = true;
							const index = parseInt(selectedOption.value);
							const selected = question.options[index];
							earnedScore = selected.weight;
							answerText = selected.text;

						if (selected.weight > 0) {
							totalPositiveWeight += selected.weight;
						} else {
							totalNegativeWeight += Math.abs(selected.weight);
						}
					}
                }
			}

                // Separate positive and negative weights for percentage calculation
                if (question.weight < 0) {
                    totalNegativeWeight += Math.abs(question.weight);
                }
                
                if (answered) {
                    answeredQuestions++;
                    totalScore += earnedScore;
                    detailedAnswers.push({
                        question: question.text,
                        answer: answerText,
                        earnedScore: earnedScore,
                        maxScore: question.weight
                    });
                }
            });

            // Check if all questions are answered
            if (answeredQuestions < questions.length) {
                alert('Please answer all questions before calculating your score.');
                return;
            }

            // Show weights and ranges after calculation
            showWeightsAndRanges();

            // Calculate percentage based on positive weights only
            let percentage;
            if (totalScore < 0) {
                percentage = Math.round((totalScore / totalPositiveWeight) * 100);
            } else {
                percentage = Math.round((totalScore / totalPositiveWeight) * 100);
            }
            
            // Determine grade
            const grade = determineGrade(percentage);
            
            // Store calculation result for export
            const participantName = document.getElementById('participant-name').value.trim();
            lastCalculationResult = {
                name: participantName || 'Anonymous',
                grade: grade,
                totalScore: totalScore,
                totalPositiveWeight: totalPositiveWeight,
                totalNegativeWeight: totalNegativeWeight,
                percentage: percentage,
                detailedAnswers: detailedAnswers,
                calculationDate: new Date().toISOString()
            };
            
            // Display result
            displayResult(grade, totalScore, totalPositiveWeight, totalNegativeWeight, percentage, detailedAnswers);
        }

        // Show weights and ranges after calculation
        function showWeightsAndRanges() {
            questions.forEach(question => {
                const weightElement = document.getElementById(`weight_${question.id}`);
                if (weightElement) {
                    weightElement.classList.add('show');
                }
                
                if (question.type === 'numerical') {
                    const rangesElement = document.getElementById(`ranges_${question.id}`);
                    if (rangesElement) {
                        rangesElement.classList.add('show');
                    }
                }
            });
        }

        // Determine grade based on percentage
        function determineGrade(percentage) {
            const sortedBoundaries = Object.entries(gradeBoundaries)
                .sort(([a], [b]) => parseInt(b) - parseInt(a));
            
            for (const [boundary, grade] of sortedBoundaries) {
                if (percentage >= parseInt(boundary)) {
                    return grade;
                }
            }
            return 'F';
        }

        // Display the result with detailed breakdown
        function displayResult(grade, score, totalPositive, totalNegative, percentage, detailedAnswers) {
            const resultDiv = document.getElementById('result');
            const gradeDisplay = document.getElementById('grade');
            const scoreDetails = document.getElementById('score-details');
            const detailedBreakdown = document.getElementById('detailed-breakdown');

            gradeDisplay.textContent = `Grade: ${grade}`;
            
            let detailsHTML = `Score: ${score} points<br>`;
            detailsHTML += `Positive Weight Available: ${totalPositive} points<br>`;
            if (totalNegative > 0) {
                detailsHTML += `Negative Weight Possible: -${totalNegative} points<br>`;
            }
            detailsHTML += `Percentage: ${percentage}%`;
            
            if (grade === 'U') {
                detailsHTML += `<br><strong>Undefined species - Negative Score</strong>`;
            }
            
            scoreDetails.innerHTML = detailsHTML;

            // Create detailed breakdown
            let breakdownHTML = '<div class="breakdown-title">Detailed Breakdown</div>';
            detailedAnswers.forEach(item => {
                breakdownHTML += `
                    <div class="breakdown-item">
                        <span>${item.question}</span>
                        <span class="breakdown-score ${item.earnedScore >= 0 ? 'positive' : 'negative'}">
                            ${item.earnedScore > 0 ? '+' : ''}${item.earnedScore} pts
                        </span>
                    </div>
                `;
            });
            breakdownHTML += `
                <div class="breakdown-item">
                    <span><strong>Total Score</strong></span>
                    <span class="breakdown-score ${score >= 0 ? 'positive' : 'negative'}">
                        <strong>${score > 0 ? '+' : ''}${score} pts</strong>
                    </span>
                </div>
            `;
            
            detailedBreakdown.innerHTML = breakdownHTML;

            // Apply grade-specific styling
            resultDiv.className = `result grade-${grade} show`;
            
            // Scroll to result
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }

        // Export summary as text file
        function exportSummary() {
            if (!lastCalculationResult) {
                alert('Please calculate your UMS first before exporting.');
                return;
            }

            const result = lastCalculationResult;
            const date = new Date(result.calculationDate).toLocaleString();
            
            let summaryText = `HP Level Qualification (Higher Level) Results Certificate\n`;
            summaryText += `${'='.repeat(50)}\n\n`;
            summaryText += `Participant: ${result.name}\n`;
            summaryText += `Date: ${date}\n`;
            summaryText += `Grade: ${result.grade}\n`;
            summaryText += `Total Score: ${result.totalScore} points\n`;
            summaryText += `Percentage: ${result.percentage}%\n\n`;
            
            summaryText += `DETAILED BREAKDOWN:\n`;
            summaryText += `${'-'.repeat(30)}\n`;
            
            result.detailedAnswers.forEach((item, index) => {
                summaryText += `${index + 1}. ${item.question}\n`;
                summaryText += `   Answer: ${item.answer}\n`;
                summaryText += `   Score: ${item.earnedScore > 0 ? '+' : ''}${item.earnedScore} points\n\n`;
            });
            
            summaryText += `SUMMARY:\n`;
            summaryText += `${'-'.repeat(20)}\n`;
            summaryText += `Total Possible Positive Points: ${result.totalPositiveWeight}\n`;
            if (result.totalNegativeWeight > 0) {
                summaryText += `Total Possible Negative Points: -${result.totalNegativeWeight}\n`;
            }
            summaryText += `Final Score: ${result.totalScore} points\n`;
            summaryText += `Final Grade: ${result.grade}\n`;
            
            if (result.grade === 'U') {
                summaryText += `Note: Grade U indicates a result from an undefined species with negative scoring.\n`;
            }

            // Create and download file
            const blob = new Blob([summaryText], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `HP_Level_certificate_${result.name.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }

        // Reset the calculator
        function resetCalculator() {
            // Clear all radio buttons
            questions.forEach(question => {
                if (question.type === 'numerical') {
                    const input = document.getElementById(`num_${question.id}`);
                    if (input) input.value = '';
                    const scoreDisplay = document.getElementById(`score_${question.id}`);
                    if (scoreDisplay) scoreDisplay.style.display = 'none';
                } else {
                    const radioButtons = document.getElementsByName(`question_${question.id}`);
                    radioButtons.forEach(radio => radio.checked = false);
                }

                // Hide weights and ranges again
                const weightElement = document.getElementById(`weight_${question.id}`);
                if (weightElement) {
                    weightElement.classList.remove('show');
                }
                
                if (question.type === 'numerical') {
                    const rangesElement = document.getElementById(`ranges_${question.id}`);
                    if (rangesElement) {
                        rangesElement.classList.remove('show');
                    }
                }
            });

            // Clear name field
            document.getElementById('participant-name').value = '';

            // Hide result
            document.getElementById('result').classList.remove('show');
            
            // Clear stored calculation result
            lastCalculationResult = null;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', initializeCalculator);