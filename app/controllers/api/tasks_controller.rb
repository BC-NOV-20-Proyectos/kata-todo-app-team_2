class Api::TasksController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :is_auth

    def index
        @tasks = Task.select("id,name,status").where("user_id=#{current_user.id}").order("created_at DESC")
        render json: {
            tasks: @tasks
        }
    end

    def create
        tasks = tasks_params[:tasks]
        was_created = false
        tasks_split = tasks.split(",")
        tasks_split.each do |task|
            was_created =  Task.create!({
                user_id: current_user.id,
                name: task.strip,
                status: tasks_params[:status]
            })
        end
        if was_created
            render json: {
                code: "OK"
            }
        else 
            head 500
        end
    end

    def update 
        tasks = params[:tasks]
        was_updated = false
        tasks.each do |task|
            was_updated =  Task.find(task[:id]).update({
                user_id: current_user.id,
                name: task[:name],
                status: params[:status]
            })
        end
        if was_updated
            render json: {
                code: "OK"
            }
        else 
            head 500
        end
    end

    def destroy 
        tasks = params[:tasks]
        was_deleted = false
        if(tasks.length > 1)
            was_deleted = Task.where("user_id = #{current_user.id}").destroy_all()
        else 
            was_deleted = Task.destroy(tasks[0][:id])
        end
        if was_deleted
            render json: {
                code: "OK",
            }
        else 
            head 500
        end
    end

    def tasks_params
        params.require(:task).permit(:tasks, :status)
    end
end
