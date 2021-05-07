class TasksController < ApplicationController
    before_action :require_login
    def home
    end

    def get_pdf 
        @tasks = Task.select("name, status").where("user_id=#{current_user.id}").order("created_at DESC")
        @user = current_user
        respond_to do |format|
            format.html
            format.pdf do
                render pdf: "to-do-list_#{current_user.id}_#{Time.now.strftime("%d-%m-%Y")}",
                page_size: 'A4',
                template: "tasks/get_pdf.html.erb",
                layout: "pdf.html",
                orientation: "Landscape",
                lowquality: true,
                zoom: 1,
                dpi: 75
            end
        end
    end

    def get_csv 
        @tasks = Task.select("name, status").where("user_id=#{current_user.id}").order("created_at DESC")
        respond_to do |format|
        format.html
        format.csv { 
            send_data @tasks.to_csv, 
            filename: "to-do-list_#{current_user.id}_#{Time.now.strftime("%d-%m-%Y")}.csv" 
        }
        end
    end
end
